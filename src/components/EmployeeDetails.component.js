import React from 'react'
import { Card, Button } from 'react-bootstrap'
import EmployeeDataService from "../services/employee.service"
import { Link } from "react-router-dom";

export default function EmployeeDetails({employee}, {update}) {

    const deleteAndRefresh = (e) => {
        e.preventDefault();
        EmployeeDataService.delete(employee._id);
        window.location.reload(false);
    }

    
    return (
        <Card style={{width:'32%', marginBottom:'1rem', marginRight:'5px'}}>
            <Card.Body>
                <Card.Title>{employee.first_name} {employee.last_name}</Card.Title>
                <Card.Text><strong>Email:</strong> { employee.email}</Card.Text>
                <span style={{ display:'flex', flexflow: 'row wrap', justifyContent: 'space-around' }}>
                    <Link style={{width: '31%' }} className='btn btn-success' size='sm' to={"/employees/" + employee._id}>View</Link>
                    {/* <Link style={{width: '31%' }} className='btn btn-warning' size='sm' to={"/employees/" + employee._id}>Update</Link> */}
                    <Button style={{width: '31%' }} variant='danger' size='sm' onClick={(e) => deleteAndRefresh(e)}>Delete</Button>
                </span>
            </Card.Body>
        </Card>
    );
}