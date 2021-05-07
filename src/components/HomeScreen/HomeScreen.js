import React, {useEffect, useState} from 'react';

import styles from './HomeScreen.module.scss';
import {fetchInternships} from '../../store/actions/internshipActions'
import  fetchCompany  from '../../store/actions/companyAction'
import  fetchDepartment  from '../../store/actions/departmentAction'

import { Form } from 'react-bootstrap'


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
  const [companies, setCompanies] = useState([])
  const [deps, setDepartments] = useState([])
  const [rawComps, setRawComps] = useState([])
  

  const reFilter = (value) =>{
    setCompanies(rawComps.filter((e) => e.departments.includes(value) || value === 'No Filter'))
  }


  useEffect(() => {
    onLoadData().then(({internships, rawcompanies, departments}) => {
      

      let a = rawcompanies.map((company) => {
        let filInts = internships.filter((i) => i.company === company.id);
        if (filInts.length === 0){
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
        company.position = [company.latitude, company.longitude]
        
        return {...company, ...mapped}
      })

      setDepartments(['No Filter', ...departments])
      a = a.filter(e=> e != null)
      setRawComps(a)
      setCompanies(a)
    })
  }, [])
  

  return(
    <div className={styles.HomeScreen}>
    <div className={styles.main}>
      <div className={styles.map}>
        <StreetMap companies={companies}></StreetMap>
      </div>
      <div className={styles.filter}>
        <h2>Filter</h2>
        <Form.Group id="department">
            <Form.Label>Department</Form.Label>
            <Form.Control as="select" onChange={(e)=>{
                reFilter(e.target.value)
              }}>
              {deps.map((e)=>{
                return <option>{e}</option>
              })}
            </Form.Control>
        </Form.Group>
        

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
      let departments = await dispatch(fetchDepartment())
      return {internships, rawcompanies, departments}
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HomeScreenPresentation);
