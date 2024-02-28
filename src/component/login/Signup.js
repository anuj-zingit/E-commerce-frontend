import React from 'React';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function Signup() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function handleSubmit(e) {
        e.preventDefault();
        let item = { name, age, email, password };
        try {
            let result = await fetch("/signup", {
                method: 'post',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            })
            console.log(result, "result")
            if (result.ok) {
                console.log('Post request successful');
                // Handle success, e.g., show a success message or redirect
            } else {
                console.error('Post request failed');
                // Handle errors, e.g., show an error message
            }
        } catch (e) {
            console.log(e, 'error')
        }
    }
    return (
        <div id="signup">
            <h1>Registration</h1>
            <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} name='name' onChange={(e) => setName(e.target.value)} placeholder="First name" />
                <Form.Label>Age</Form.Label>
                <Form.Control value={age} name='age' onChange={(e) => setAge(e.target.value)} placeholder="age" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} type="password" name='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type='submit' onClick={handleSubmit}>submit</button>
            </Form >
        </div>
    )
}

export default Signup;