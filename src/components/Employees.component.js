import axios from 'axios'
import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import userEvent from '@testing-library/user-event'
import EmployeeDetails from './EmployeeDetails.component'
import key from '../key'

export default class Employees extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
    }

    // Set constants to be used for get calls
    TEST_URL = 'http://localhost:8081'
    BASE_URL = 'https://101314570-comp-3123-backend.vercel.app'
    CONFIG = {
        method: 'get',
        url: this.BASE_URL,
        headers: {
          Authorization: 'Bearer ' + key,
        },
      };
    

    componentDidMount = () => {
        this.getEmployees()
    }

    getEmployees = async () => {
        // make call to API and log errors
        try {
            const res = await axios.get(this.TEST_URL + '/api/emp/employees');
            console.log(res.data.list)
            this.setState({
                ...this.state,
                employees : res.data.list
            });
        } catch (error) {
            console.log(error)
        }
    }

    addEmployee = async () => {
        // make call to API and log errors
        try {
            axios.post(this.TEST_URL + '/api/emp/employees', {
                "first_name": 'David',
                "last_name": 'Fortich',
                "email": 'd@f.com',
                "gender": 'male',
                "salary": 100
            });
        } catch (error) {
            console.log(error)
        }
    }

    getResultsByDate = (event) => {
        event.preventDefault()
        this.getEmployees()
    }

    onNewDateSet = (event) => {
        this.setState({
            ...this.state,
            [event.target.id] : [event.target.value] 
        })
    }

    render() {
        return (
        // Hold all rendering in a styled div
        <div style={{ backgroundColor: 'steelblue', padding:'20px'}}>
            <h1 style={{textAlign:'center'}}>List of Employees</h1>        
            {/* Create Flexbox in which Cards containing Employees will be shown */}
            <div style={{ display:'flex', flexFlow: 'row wrap', justifyContent:'space-around'}}>
            {
                // Cycle through all games in state and create cards with info for each
                this.state.employees.map(employee => (
                    <EmployeeDetails key={employee._id} employee={ employee }/>
                ))
            }
            </div>
        </div>
        )
    }
}