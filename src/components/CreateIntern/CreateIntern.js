import React, { Component, useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import  CreateInternAction  from '../../store/actions/departmentAction'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useHistory } from 'react-router-dom'
import  fetchDepartment  from '../../store/actions/departmentAction'
import  fetchCompany  from '../../store/actions/companyAction'
import { compose} from 'redux'
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';


function CreateIntern({departments , companies, onLoadData}){
  console.log(companies)
  const [title, setTitle] = useState('') 
  const [summary, setSummary] = useState('') 
  const [salary, setSalary] = useState('') 
  const [satisfaction, setSatisfaction] = useState('') 
  const [department, setDepartment] = useState('') 
  const [company, setCompany] = useState('')
  const [street, setSreet] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
 
  useEffect(() => {onLoadData()}, [])

  console.log(JSON.stringify(companies))
  let finalCompanies = []

  companies.forEach((item)=>{
    console.log(item)
    finalCompanies.push({"title": item.name})
  })
  console.log(JSON.stringify(finalCompanies))

  async function handleSubmit(e){
    e.preventDefault();
    try{
      setLoading(true)
      await CreateInternAction();
      history.push('/');
    }catch{
      setError('Faild to upload InternForm to firebase')
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Create Intern</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="input" onChange={(e)=>{setTitle(e.target.value)}} required />
                </Form.Group>
                <Form.Group id="summary">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={4} onChange={(e)=>{setSummary(e.target.value)}} required/>
                </Form.Group>
                <Form.Group id="salary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control as="select" onChange={(e)=>{setSalary(e.target.value)}} required >
                      <option>None</option>
                      <option>Below average</option>
                      <option>Average</option>
                      <option>Above average</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group id="satisfaction">
                    <Form.Label>Satisfaction</Form.Label>
                    <Form.Control as="select" onChange={(e)=>{setSatisfaction(e.target.value)}} required >
                      <option>Very disatisfied</option>
                      <option>Disatisfied</option>
                      <option>Ok</option>
                      <option>Satisfied</option>
                      <option>Very satisfied</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group id="departmen">
                    <Form.Label>Department</Form.Label>
                    <Form.Control as="select" onChange={(e)=>{setDepartment(e.target.value)}} required >
                      {departments.map((e)=>{
                        return <option>{e}</option>
                      })}
                    </Form.Control>
                </Form.Group>
                <Autocomplete
                  onChange={(e)=>{setCompany(e.target.value)}}
                  freeSolo
                  id="combo-box-demo"
                  options={finalCompanies}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 357 ,paddingBottom: 10}}
                  renderInput={(params) => <TextField {...params} label="Company" variant="outlined" />}
                />
                <Form.Group id="street">
                    <Form.Label>Company street</Form.Label>
                    <Form.Control type="input" onChange={(e)=>{setSreet(e.target.value)}} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
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
    companies: state.companies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData: async () => {
       await dispatch(fetchDepartment())
       await dispatch(fetchCompany())
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(CreateIntern);