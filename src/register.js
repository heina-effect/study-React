import React from "react";
import { Form, Button } from 'react-bootstrap';

function Register() {

    return (
        <div className="Login container mt-3">
            <h2>SIGN IN!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address <span style={{color : 'red'}}>*</span></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password <span style={{color : 'red'}}>*</span></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password Check<span style={{color : 'red'}}>*</span></Form.Label>
                    <Form.Control type="password" placeholder="Password Check" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="dark" type="submit">
                    JOIN
                </Button>
            </Form>
        </div>
    )
}
export default Register;