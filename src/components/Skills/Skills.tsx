import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {getSkills, setIsFormShown} from "../../redux/reducers/skillsSlice";
import {Button, SkillForm, Title} from "../index";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import './Skills.scss'

const Skills = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {items: skills, isFormShown} = useSelector((state: RootState) => state.skills);
    const handleFormShown = () => dispatch(setIsFormShown(!isFormShown));

    useEffect(() => {
        dispatch(getSkills());
    }, [dispatch]);

    return (
        <div className='skillsWrapper' id='skills' data-testid='skills'>
            <div className='skillsFrame'>
                <Title title={'Skills'}/>
                <Button icon={faPenToSquare}
                        text={`${isFormShown ? 'Close' : 'Open'} edit`}
                        onClick={handleFormShown}
                />
            </div>
            {isFormShown && <SkillForm/>}
            {skills?.map(({name, range}) => (
                <div className='skillBox' style={{width: `${range}%`}} key={`${name}_${range}`}>
                    <span className='skillBoxName'>{name}</span>
                </div>
            ))}
            <div className='skillsLine'>
                <div className='skillsLineItem'>
                    <div className='verticalLine'/>
                    <div className='skillsLineName'>Beginner</div>
                </div>
                <div className='skillsLineItem'>
                    <div className='verticalLine'/>
                    <div className='skillsLineName'>Proficient</div>
                </div>
                <div className='skillsLineItem'/>
                <div className='skillsLineItem'>
                    <div className='verticalLine'/>
                    <div className='skillsLineName'>Expert</div>
                </div>
                <div className='skillsLineItem'>
                    <div className='verticalLine'/>
                    <div className='skillsLineName'>Master</div>
                </div>
            </div>
        </div>
    )
};

export default Skills;
