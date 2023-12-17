import React from 'react';
import {faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Spinner.scss'

const Spinner = () => {
    return (
        <div className='spinnerWrapper'>
            <FontAwesomeIcon className="spinner" icon={faSyncAlt} />
        </div>
    );
};

export default Spinner;
