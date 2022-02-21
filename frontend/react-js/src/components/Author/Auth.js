import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Login from './Login/Login.js';
import Singin from './Signin/Singin.js';
import './style.css'

const Auth = (props) => {
    

    console.log(props.location.search)

    return (
        <div className="auth">
            <Link to="/">
                <FaTimes/>
            </Link>
            <div className="container">            
                <Login/>
                <Singin/>
            </div>
        </div>
    )
}

export default Auth;