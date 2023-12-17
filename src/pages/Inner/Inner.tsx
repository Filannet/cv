import React, {useState} from 'react';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {Address, Box, Button, Expertise, Feedback, Panel, Portfolio, Skills, TimeLine} from "../../components";
import {aboutMe, expertiseData, feedbacksData, portfolioData, timeLineData} from "../../mocks";
import './Inner.scss';

const Inner = () => {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
    const scrollToTop = () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    return (
        <div className={`wrapper ${isMenuCollapsed ? 'collapsed' : ''}`}>
            <Panel setIsMenuCollapsed={setIsMenuCollapsed}/>
            <div className='innerContent'>
                <Box title='About me' content={aboutMe}/>
                <TimeLine items={timeLineData}/>
                <Expertise items={expertiseData}/>
                <Skills/>
                <Portfolio items={portfolioData}/>
                <Address/>
                <Feedback items={feedbacksData}/>
                <Button
                    type='scroll'
                    icon={faAngleUp}
                    onClick={scrollToTop}
                />
            </div>
        </div>
    );
};

export default Inner;
