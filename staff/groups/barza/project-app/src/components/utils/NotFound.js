import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const NotFound = ({ location }) => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center text-center">
                <div className="col-8">
                    <h3>
                        No match for <code>{location.pathname}</code>
                        <hr />
                        <Link to="/"> Go back home</Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
