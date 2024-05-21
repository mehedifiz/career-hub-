import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>Opps !</h1>

            <Link to='/'> Go back to  Home!</Link>
        </div>
    );
};

export default Error;