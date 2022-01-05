import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default header;