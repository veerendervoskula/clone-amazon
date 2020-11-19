import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [{ user }, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            //after login redirect to home
            .then((auth) => { console.log(auth); history.push('/') })
            .catch(e => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            //after login redirect to home
            .then((auth) => {
                console.log(auth);
                dispatch({
                    type: 'SET_USER',
                    user: auth
                });
                history.push('/')
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Main Logo" />
            </Link>
            <div className="login__container">
                <h3 className="login__main-title">Sign-In</h3>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" className="login__email" onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="text" className="login__pwd" onChange={e => setPassword(e.target.value)} />
                    <button onClick={login} className="login__cta">Sign In</button>
                    <p className="login__policy">By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button onClick={register} className="login__create">Create your amazon Account</button>
                </form>
            </div>
        </div>



    )
}

export default Login
