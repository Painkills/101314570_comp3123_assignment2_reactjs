import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EmployeeDetails({employee}) {
    return (
        <Card style={{width:'32%', marginBottom:'1rem', marginRight:'5px'}}>
            <Card.Img variant="top" src={ employee.background_image } />
            <Card.Body>
                <Card.Title>{employee.first_name} {employee.last_name}</Card.Title>
                <Card.Text><strong>Email:</strong> { employee.email}</Card.Text>
                <Card.Text><strong>Gender:</strong> { employee.gender }</Card.Text>
                <Card.Text><strong>Salary:</strong> { employee.salary }</Card.Text>
            </Card.Body>
        </Card>
      );
}