import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './HomeScreen.module.scss';
import {fetchInternships} from '../../store/actions/internshipActions'
import  fetchCompany  from '../../store/actions/companyAction'

import { compose } from 'redux'
import { connect } from 'react-redux'
import StreetMap from '../StreetMap/StreetMap';


const RemapSalary = (val) => {
  switch(val){
    case 0: return 'None'
    case 1: return 'Below Average'
    case 2: return 'Average'
    case 3: return 'Above Average'
    default: return 'No answers'
  }
}

const RemapSatisfaction = (val) => {
  switch(val){
    case 0: return 'Very Disatisfied'
    case 1: return 'Disatisfied'
    case 2: return 'Ok'
    case 3: return 'Satisfied'
    case 4: return 'Very Satisfied'
    default: return 'No answers'
  }
}

const HomeScreenPresentation = ({onLoadData}) => {
  const [companies, setCompanies] = useState('')
  
  useEffect(() => {
    onLoadData().then(({internships, rawcompanies}) => {
      let a = rawcompanies.map((company) => {
        let filInts = internships.filter((i) => i.company == company.id);
        if (filInts.length == 0){
          return null
        }

        let mapped = filInts.reduce((accumulator, curr) => {
          accumulator.salary += parseInt(curr.salary)
          accumulator.satisfaction += parseInt(curr.satisfaction)

          if(!accumulator.departments.includes(curr.department)) 
              accumulator.departments.push(curr.department)
          accumulator.links.push(curr.link)
          
          return accumulator
        }, {links: [], salary: 0, departments: [], satisfaction: 0})

        let count = filInts.length

        mapped.salary = RemapSalary(Math.round(mapped.salary/count))
        mapped.satisfaction = RemapSatisfaction(Math.round(mapped.satisfaction/count))
        company.position = [company.longitude, company.latitude]
        
        return {...company, ...mapped}
      })
      setCompanies(a.filter(e=> e != null))
    })
  }, [])
  
  console.log(companies)

  return(
    <div className={styles.HomeScreen}>
    <div className={styles.main}>
      <div className={styles.map}>
        <StreetMap></StreetMap>
      </div>
    </div>
    </div>
  )
}





const mapStateToProps = (state) => {
  return {
    internships: state.internships,
    rawcompanies: state.companies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData: async () => {
      let internships = await dispatch(fetchInternships())
      let rawcompanies = await dispatch(fetchCompany())
      return {internships, rawcompanies}
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HomeScreenPresentation);
