import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInGoogle } = useAuth();
    return (
        <div className='login-form'>
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Your Password' />
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                <div>---------or----------</div>
                <br />
                <button
                    onClick={signInGoogle}>
                    Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default Register;