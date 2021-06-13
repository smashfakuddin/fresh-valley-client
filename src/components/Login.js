import React, { useContext } from 'react';
import './Login.css';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email
                }
                setLoggedInUser(signedInUser);
            });

    }

    return (
        <>
            <div className="container">
                <div className='input-form'>
                    <h2>Create an Account</h2>
                    <form action="" method="post" className='input-form'>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Username or Email' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Confirm password' />
                        <input className='submit-button' type="submit" />
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <button onClick={handleSignIn} className="btn btn-secondary "><FaGoogle className='text-danger' />       continue with google</button>
                </div>
            </div>
        </>
    );
};

export default Login;