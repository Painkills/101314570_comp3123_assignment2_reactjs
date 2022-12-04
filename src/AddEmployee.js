import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('F');
    const [salary, setSalary] = useState('1');
    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(gender);
        console.log(salary);
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Gender</label>
                    <input placeholder='Gender' onChange={(e) => setGender(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Salary</label>
                    <input placeholder='Salary' onChange={(e) => setSalary(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}