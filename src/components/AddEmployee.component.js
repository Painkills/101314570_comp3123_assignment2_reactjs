import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap'
import EmployeeDataService from '../services/employee.service'

export default class AddEmployee extends Component {
    constructor(props) {
        super(props);
        // this.onChangeFirstName = this.onChangeFirstName.bind(this);
        // this.onChangeLastName = this.onChangeLastName.bind(this);
        // this.onChangeEmail = this.onChangeEmail.bind(this);
        // this.onChangeGender = this.onChangeGender.bind(this);
        // this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onValChange = this.onValChange.bind(this);

        this.saveEmployee = this.saveEmployee.bind(this);
        this.newEmployee = this.newEmployee.bind(this);
    
    this.state = {
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            salary: "",

            submitted: false
    };
}

    onValChange = (event) => {
        this.setState({...this.state, [event.target.id] : event.target.value})
    }

    saveEmployee() {
        var data = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          gender: this.state.gender,
          salary: this.state.salary
        };

        console.log(data)
    
        EmployeeDataService.create(data)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
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
    
      newEmployee() {
        this.setState({
            employee: {
                firstName: "",
                lastName: "",
                email: "",
                gender: "",
                salary: "",
    
                submitted: false
            }
        });
      }
    
    render () {
        return (
            <div>
                {this.state.submitted ? (
                    <div>
                        <h4>Employee added successfully!</h4>
                        <Button className='btn btn-success' onClick={this.newEmployee}>Add Another</Button>
                    </div>
                ) : (
                    <div>
                    <Form className="create-form">
                        <Form.Group>
                            <label htmlFor='firstName'>First Name</label>
                            <input type='text' className='form-control' id='firstName' required name='firstName' onChange={(e) => this.onValChange(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <label>Last Name</label>
                            <input type='text' className='form-control' id='lastName' required value={this.state.lastName} name='lastName' onChange={(e) => this.onValChange(e)}/>
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
                    </Form>
                    </div>
                )}                
            </div>
        );
    }    
}