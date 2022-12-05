import axios from 'axios'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import EmployeeDataService from '../services/employee.service';
import { Link } from "react-router-dom";
import EmployeeDetails from './EmployeeDetails.component'


export default class EmployeeList extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
    }    

    componentDidMount = () => {
        this.getEmployees()
    }  

    getEmployees = () => {
        EmployeeDataService.getAll()
            .then(response => {
                this.setState({
                    ...this.state,
                    employees: response.data.list
                });
            })
            .catch(e => {
                console.log(e);
        });
    }

    addTestEmployee = async () => {
        // make a quick employee to test with
        const data = {
            "first_name": 'David',
            "last_name": 'Fortich',
            "email": 'd@f.com',
            "gender": 'male',
            "salary": 100
        };
        EmployeeDataService.create(data)
            .then(() => {
                this.getEmployees();
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
        // Hold all rendering in a styled div
        <div style={{ backgroundColor: 'steelblue', padding:'10px'}}>
            <h1 style={{textAlign:'center'}}>Employee List</h1>
            <Button className='btn btn-warning' onClick={() => this.addTestEmployee()}>Add(TEST)</Button>  
            <Link style={{margin: '10px'}} className='btn btn-success' to={'/add'}>Add an Employee </Link>   
            {/* Create Flexbox in which Cards containing Employees will be shown */}
            <div style={{ display:'flex', flexFlow: 'row wrap', justifyContent:'space-around'}}>
            {
                // Cycle through all games in state and create cards with info for each
                this.state.employees.map(employee => (
                    <EmployeeDetails key={employee._id} employee={ employee } getEmployees= { this.getEmployees }/>
                ))
            }
            </div>
        </div>
        )
    }
}