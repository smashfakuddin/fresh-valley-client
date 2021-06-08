import React from 'react';
import './Login.css';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="input-form ">
                    <h2>Create an Account</h2>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Username or Email' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Confirm password' />
                    <input className='submit-button' type="submit" />
                    <p>Already have an account? <a href="">Login</a></p>
                    <button className="btn btn-secondary"><FaGoogle/>       continue with google</button>
                </div>
            </div>

        </>
    );
};

export default Login;