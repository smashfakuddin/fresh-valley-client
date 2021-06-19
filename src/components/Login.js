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
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        img: '',
        email: '',
        password: '',
        error: '',
        success: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    img: photoURL
                }
                setLoggedInUser(signedInUser);
            });
    };

    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        };

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = (isPasswordValid && passwordHasNumber);
        };
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);

        };
    };

    const handleSubmit = (e) => {
        if (newUser && user.name && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log(res);
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = "Successfully Created Your Account,You Can Log In Now!!!";
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = ' ';
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const newUserInfo = { ...user };
                newUserInfo.error = "";
                newUserInfo.success = "Successfully Log In Your Account";
                setUser(newUserInfo);
                setLoggedInUser(user);
            })
            .catch((error) => {
                console.log(error);
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = ' ';
                setUser(newUserInfo);
            });
        }
        e.preventDefault();
    };

    return (
        <>
            <div className="container">
                <div className='input-form text-center'>
                    {newUser ? <h2>Create an Account</h2> : <h2>Log In Now</h2>}
                    <form onSubmit={handleSubmit} className='input-form'>
                        {newUser && <input onBlur={handleBlur} type="text" name="name" placeholder='Name' />}
                        <input onBlur={handleBlur} type="text" name="email" placeholder='Username or Email' required />
                        <input onBlur={handleBlur} type="password" name="password" placeholder='Password' required />
                        {/* <input type="password" placeholder='Confirm password'  /> */}
                        <input className='btn btn-success' type="submit" value={newUser ? 'Sign Up' : 'Log In'} />
                    </form>
                    <div className='text-center'>
                        <label htmlFor="newUser">Don't Have an account? </label> {"   "}
                        <input type="checkbox" name="newUser" id="" onChange={() => setNewUser(!newUser)} /> Sign Up
                    </div>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    <p style={{ color: 'green' }}>{user.success}</p>
                    <button onClick={handleSignIn} className="btn btn-secondary "><FaGoogle className='text-danger' />       continue with google</button>
                </div>

            </div>
        </>
    );
};


export default Login;