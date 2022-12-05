import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import EmployeeDataService from '../services/employee.service'

export default class AddEmployee extends Component {
    constructor(props) {
        super(props);
        // this.onValChange = this.onValChange.bind(this);

        // this.saveEmployee = this.saveEmployee.bind(this);
        // this.newEmployee = this.newEmployee.bind(this);
    
    this.state = {
            first_name: "",
            last_name: "",
            email: "",
            gender: "",
            salary: "",

            submitted: false
        };
    }

    onValChange = (event) => {
        this.setState({...this.state, [event.target.id] : event.target.value})
    }

    saveEmployee = () => {
        var data = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          gender: this.state.gender,
          salary: this.state.salary
        };

        console.log(data)
    
        EmployeeDataService.create(data)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    gender: response.data.gender,
                    salary: response.data.salary,

                    submitted: true
            });
                console.log(response.data);
            })
                .catch(e => {
                    console.log(e);
            });
    }
    
    newEmployee = () => {
        this.setState({
            first_name: "",
            last_name: "",
            email: "",
            gender: "",
            salary: "",

            submitted: false
        });
    }
    
    render () {
        return (
            <div style={{ backgroundColor: 'steelblue', padding:'20px'}}>
                {this.state.submitted ? (
                    <div>
                        <h4>Employee added successfully!</h4>
                        <Button className='btn btn-success' onClick={this.newEmployee}>Add Another</Button>
                        <Link style={{margin: '10px'}} className='btn btn-secondary' to={'/employees'}> Back to List </Link>
                    </div>
                ) : (
                    <div>
                    <h2> Create an Employee </h2>
                    <Form className="create-form" style={{ textAlign: 'left'}}>
                        <Form.Group>
                            <label htmlFor='first_name'>First Name</label>
                            <input type='text' className='form-control' id='first_name' required name='first_name' onChange={(e) => this.onValChange(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <label>Last Name</label>
                            <input type='text' className='form-control' id='last_name' required value={this.state.last_name} name='last_name' onChange={(e) => this.onValChange(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <label>Email</label>
                            <input type='text' className='form-control' id='email' required value={this.state.email} name='email' onChange={(e) => this.onValChange(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <label>Gender</label>
                            <input type='text' className='form-control' id='gender' required value={this.state.gender} name='gender' onChange={(e) => this.onValChange(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <label>Salary</label>
                            <input type='text' className='form-control' id='salary' required value={this.state.salary} name='salary' onChange={(e) => this.onValChange(e)}/>
                        </Form.Group>
                        <Button onClick={this.saveEmployee} className="btn btn-success">Submit</Button>
                        <Link style={{margin: '10px'}} className='btn btn-secondary' to={'/employees'}> Back to List</Link>
                    </Form>
                    </div>
                )}                
            </div>
        );
    }    
}