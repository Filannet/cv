import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faGraduationCap, faPen, faGem, faSuitcase, faComment, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';

const Navigation = () => {
    return (
        <ul className='navigation'>
            <li className='navigationItem'>
                <HashLink to='#box' className='navigationLink'>
                    <FontAwesomeIcon className='navigationIcon' icon={faUser} />
                    <span className='navigationText'>About me</span>
                </HashLink>
            </li>
            <li className='navigationItem'>
                <HashLink to='#education' className='navigationLink'>
                    <FontAwesomeIcon className='navigationIcon' icon={faGraduationCap} />
                    <span className='navigationText'>Education</span>
                </HashLink>
            </li>
            <li className='navigationItem'>
                <HashLink to='#experience' className='navigationLink'>
                    <FontAwesomeIcon className='navigationIcon' icon={faPen} />
                    <span className='navigationText'>Experience</span>
                </HashLink>
            </li>
            <li className='navigationItem'>
                <HashLink to='#skills' className='navigationLink'>
                    <FontAwesomeIcon className='navigationIcon' icon={faGem} />
                    <span className='navigationText'>Skills</span>
                </HashLink>
            </li>
            <li className='navigationItem'>
                <HashLink to='#portfolio' className='navigationLink'>
                    <FontAwesomeIcon className='navigationIcon' icon={faSuitcase} />
                    <span className='navigationText'>Portfolio</span>
                </HashLink>
            </li>
            <li className='navigationItem'>
                <HashLink to='#contacts' className='navigationLink'>
                    <FontAwesomeIcon className='navigationIcon' icon={faLocationArrow} />
                    <span className='navigationText'>Contacts</span>
                </HashLink>
            </li>
            <li className='navigationItem'>
                <HashLink to='#feedback' className='navigationLink'>
                    <FontAwesomeIcon className='navigationIcon' icon={faComment} />
                    <span className='navigationText'>Feedback</span>
                </HashLink>
            </li>
        </ul>
    );
};

export default Navigation;
