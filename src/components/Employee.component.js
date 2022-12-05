import React, { Component } from "react";
import EmployeeDataService from "../services/employee.service";
import { Card, Form, Button } from 'react-bootstrap'
import { withRouter } from '../common/with-router';
import { Link } from 'react-router-dom';

class Employee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentEmployee: {
                _id: "",
                first_name: "",
                last_name: "",
                email: "",
                gender: "",
                salary: "",
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getEmployee(this.props.router.params.id);
    }

    onValChange = (event) => {
        this.setState({ currentEmployee: {
                ...this.state.currentEmployee, 
                [event.target.id] : event.target.value
            }
        })
    }

    getEmployee(id) {
    EmployeeDataService.get(id)
        .then(response => {
        this.setState({
            currentEmployee: response.data.retrieved_employee
        });
            // console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    updateEmployee = () => {
    EmployeeDataService.update(
        this.state.currentEmployee._id,
        this.state.currentEmployee
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "The tutorial was updated successfully!"
        });
        })
        .catch(e => {
            console.log(e);
        });
    }

    deleteEmployee() {    
    EmployeeDataService.delete(this.state.currentEmployee._id)
        .then(response => {
            console.log(response.data);
            this.props.router.navigate('/tutorials');
        })
        .catch(e => {
        console.log(e);
        });
    }

    render() {
        const { currentEmployee } = this.state;

        return (
            <div style={{ backgroundColor: 'steelblue', padding:'10px'}}>
            {currentEmployee ? (
                <div className="edit-form">
                <h4>Employee</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="first_name"
                            defaultValue={currentEmployee.first_name}
                            onChange={(e) => this.onValChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            defaultValue={currentEmployee.last_name}
                            onChange={(e) => this.onValChange(e)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            defaultValue={currentEmployee.email}
                            onChange={(e) => this.onValChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="gender"
                            defaultValue={currentEmployee.gender}
                            onChange={(e) => this.onValChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="salary"
                            defaultValue={currentEmployee.salary}
                            onChange={(e) => this.onValChange(e)}
                        />
                    </div>
                </form>

                <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={this.updateEmployee}
                    >
                    Update
                </button>

                <Link style={{margin: '10px'}} className='btn btn-secondary' to={'/employees'}> Back to List</Link>


                <p>{this.state.message}</p>
                </div>
            ) : (
                <div>
                <br />
                <p>Please click on a Employee...</p>
                </div>
            )}
            </div>
        );
    }
}

export default withRouter(Employee);