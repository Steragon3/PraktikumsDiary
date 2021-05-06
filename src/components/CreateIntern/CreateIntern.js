import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useHistory, Redirect } from 'react-router-dom'
import  fetchDepartment  from '../../store/actions/departmentAction'
import  fetchCompany  from '../../store/actions/companyAction'
import { compose} from 'redux'
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import {CreateInternPost} from '../../store/actions/internshipActions'
import { makeStyles } from '@material-ui/core/styles';
import countries from './countries'
import internStyles from './CreateIntern.module.scss'
import {useAuth} from '../../context/AuthContext'


function CreateIntern({internPost ,departments , companies, onLoadData, onCreateIntern}){
  const [title, setTitle] = useState('') 
  const [summary, setSummary] = useState('') 
  const [salary, setSalary] = useState('None') 
  const [satisfaction, setSatisfaction] = useState('Very disatisfied') 
  const [department, setDepartment] = useState('Hebamme') 
  const [company, setCompany] = useState('')
  const [street, setSreet] = useState('')
  const [error, setError] = useState('')
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [redirect, setRedirect] = useState(false)


  const [zip, setZip] = useState(false)
  const history = useHistory()
  const { currentUser } = useAuth()
  const currentUserID = currentUser.uid
  useEffect(() => {onLoadData()}, [])

  let finalCompanies = []

  companies.forEach((item)=>{
    finalCompanies.push({"title": item.name})
  })

  async function handleSubmit(e){
    setError("")
    e.preventDefault();
    console.log(companies)
    if(!companies.find(e => e.name == company)){
      if(country == "" && company == ""){
        setError("Please insert a country and company")
        return
      }
      else if(country == ""){
        setError("Please insert a country")
        return
      }else if(company == ""){
        setError("Please insert a company")
        return
      }
    }
    try{
      setLoading(true)
      
      await onCreateIntern({title,link: summary,salary,satisfaction,department,currentUserID}, {name: company, street, country, zip}, companies);
      setSaved(true)
      setTimeout(() => {
        setRedirect(true)
      }, 1000)

      /* history.push('/'); */
    }catch(err){
      setError(err.message)
    }
  }
  function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }
  const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });
  const classes = useStyles();
  
  if(redirect){
    return (<Redirect to="/" />)
  }
  return (
    <>
      <Card className={internStyles.card}>
        <Card.Body>
            <h2 className="text-center mb-4">Create Intern</h2>
            {saved && <Alert variant="success">Saved, redirecting to Home</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="input" onChange={(e)=>{setTitle(e.target.value)}} required />
                </Form.Group>
                <Form.Group id="summary">
                  <Form.Label>Link to Wikireport</Form.Label>
                  <Form.Control type="url" placeholder="https://www.google.com" pattern="^https?://.*" onChange={(e)=>{setSummary(e.target.value)}} required />
                  {/* <Form.Control as="textarea" rows={4} onChange={(e)=>{setSummary(e.target.value)}} required/> */}
                </Form.Group>
                <Form.Group id="salary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control as="select" onChange={(e)=>{setSalary(e.target.value)}} required >
                      <option value={0}>None</option>
                      <option value={0}>Below average</option>
                      <option value={0}>Average</option>
                      <option value={0}>Above average</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group id="satisfaction">
                    <Form.Label>Satisfaction</Form.Label>
                    <Form.Control as="select" onChange={(e)=>{setSatisfaction(e.target.value)}} required >
                      <option value={0}>Very disatisfied</option>
                      <option value={1}>Disatisfied</option>
                      <option value={2}>Ok</option>
                      <option value={3}>Satisfied</option>
                      <option value={4}>Very satisfied</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group id="departmen">
                    <Form.Label>Department</Form.Label>
                    <Form.Control as="select" onChange={(e)=>{
                        setDepartment(e.target.value)
                      }} required >
                      {departments.map((e)=>{
                        return <option>{e}</option>
                      })}
                    </Form.Control>
                </Form.Group>
                <Autocomplete
                  required
                  onInputChange={(event, newInputValue) => {
                    setCompany(newInputValue);
                  }}
                  freeSolo
                  id="combo-box-demo"
                  options={finalCompanies}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 357 ,paddingBottom: 10}}
                  renderInput={(params) => <TextField {...params} label="Company" variant="outlined" />}
                />

                { (!companies.find((e) => e.name == company)) &&
                  <>
                    <Form.Group id="street">
                        <Form.Label>Company street</Form.Label>
                        <Form.Control type="input" onChange={(e)=>{setSreet(e.target.value)}} required />
                    </Form.Group>
                    <Autocomplete
                      required
                      onInputChange={(event, newCountry) => {
                        setCountry(newCountry);
                      }}
                      id="country-select-demo"
                      style={{ width: 357, paddingBottom: 10 }}
                      options={countries}
                      classes={{
                        option: classes.option,
                      }}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(option) => (
                        <React.Fragment>
                          <span>{countryToFlag(option.code)}</span>
                          {option.label} ({option.code})
                        </React.Fragment>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a country"
                          variant="outlined"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                    <Form.Group id="zip">
                        <Form.Label>Zip-Code</Form.Label>
                        <Form.Control type="input" onChange={(e)=>{setZip(e.target.value)}} required />
                    </Form.Group>
                  </>
                }
                <Button disabled={loading || false} className="w-100" type="submit">
                    Submit Intern
                </Button>
            </Form>
        </Card.Body>
    </Card>
  </>
  )
}
const mapStateToProps = (state) => {
  return {
    departments: state.departments,
    companies: state.companies,
    intern: state.intern
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData: async () => {
       await dispatch(fetchDepartment())
       await dispatch(fetchCompany())
    },
    onCreateIntern: async (internPost, company, companies) => {
      try{
        dispatch(CreateInternPost(internPost, company, companies))
      }catch(err){
        throw new Error(err.message)
      }
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(CreateIntern);