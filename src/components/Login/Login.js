import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import './Login.css'
const Login = () => {
    const { signInGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation()

    const redirect_url = location?.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }


    return (
        <div className='login-form'>
            <div>
                <h1>Login</h1>
                <form>
                    <input type="email" name="" id="" placeholder='Your email..' />
                    <br />
                    <input type="password" name="" id="" placeholder='Your password..' />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>new to website? <Link to='/register'>Create Account</Link></p>
                <div>---------or---------</div>
                <br />
                <button
                    onClick={handleGoogleLogin}>
                    Sign In with Google
                </button>

            </div>
        </div>
    );
};

export default Login;