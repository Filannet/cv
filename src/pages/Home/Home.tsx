import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, PhotoBox} from "../../components";
import {photoBoxData} from "../../mocks";
import './Home.scss';

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/inner');
    }

    return (
        <div className='home'>
            <PhotoBox
                name={photoBoxData.name}
                title={photoBoxData.title}
                description={photoBoxData.description}
                avatar={photoBoxData.avatar}
            />
            <Button onClick={handleClick} text='Know more'/>
        </div>
    );
};

export default Home;
