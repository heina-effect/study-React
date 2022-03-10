import React, { useState, useReducer } from "react";
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import auth from './auth.js'
// import styled from 'styled-components'


function Login() {
    
    let initialState = useSelector((state) => state);
    let reducer3 = useDispatch();
    //JWT 
    let [state, dispatch] = useReducer(reducer3, initialState);
    let { authenticated } = state;

    function handleLogin(id, password) {
        let token = auth.login(id, password);

        if (token) {
            console.log('로그인 성공!');
            dispatch({
                type: 'SET_TOKEN',
                token: token,
                result: true,
            });
        } else {
            console.log('로그인 실패');
            dispatch({
                type: 'SET_TOKEN',
                token: null,
                result: false,
            });
        }
    }

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
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="dark" type="submit">
                    SIGN IN
                </Button>

                <p className="mt-3"> New customer? Create your account </p>
                <Button variant="outline-secondary" type="submit">
                    SIGN UP
                </Button>
            </Form>
        </div>
    )
}
export default Login;