import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faFacebookF, faSkype} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Title} from "../index";
import './Address.scss';

const Address = () => {
    return (
        <address id='contacts' data-testid='contacts'>
            <Title title='Contacts'/>
            <div className='contactsWrapper'>
                <div className='contactItem'>
                    <FontAwesomeIcon className='contactIcon' icon={faPhone} />
                    <a href='tel:+995591030684' className='contactsText contactLink'>+995 591 03 06 84</a>
                </div>
                <div className='contactItem'>
                    <FontAwesomeIcon className='contactIcon' icon={faEnvelope} />
                    <a href='mailto:filanna33@gmail.com' className='contactsText contactLink'>filanna33@gmail.com</a>
                </div>
                <div className='contactItem'>
                    <FontAwesomeIcon className='contactIcon' icon={faTwitter} />
                    <div>
                        <p className='contactsText'>Twitter</p>
                        <a className='contactLink' href='https://twitter.com/wordpress' target='_blank'>https://twitter.com/wordpress</a>
                    </div>
                </div>
                <div className='contactItem'>
                    <FontAwesomeIcon className='contactIcon' icon={faFacebookF} />
                    <div>
                        <p className='contactsText'>Facebook</p>
                        <a className='contactLink' href='https://www.facebook.com/facebook' target='_blank'>https://www.facebook.com/facebook</a>
                    </div>
                </div>
                <div className='contactItem'>
                    <FontAwesomeIcon className='contactIcon' icon={faSkype} />
                    <div>
                        <p className='contactsText'>Skype</p>
                        <a className='contactLink' href='skype:kamsolutions.pl?call'>kamsolutions.pl</a>
                    </div>
                </div>
            </div>
        </address>
    );
};

export default Address;
