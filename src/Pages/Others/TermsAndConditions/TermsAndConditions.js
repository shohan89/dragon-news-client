import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Here is our Terms and Conditions.</h2>
            <Link to='/register'>Registration</Link>
        </div>
    );
};

export default TermsAndConditions;