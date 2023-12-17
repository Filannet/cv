import './Error.scss'

import React from 'react';

const Error = () => {
    return (
        <div className='error'>
            <span className='errorMessage'>Something went wrong; please review your server connection!</span>
        </div>
    );
};

export default Error;
