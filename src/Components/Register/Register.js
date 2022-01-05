import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form action="">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" />
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already have an account?</Link>
        </div>
    );
};

export default Register;