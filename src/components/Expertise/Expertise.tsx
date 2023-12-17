import React, {FC} from 'react';
import {Title} from "../index";
import './Expertise.scss';

interface ExperienceItem {
    date: string,
    info: {
        company: string,
        job: string,
        description: string
    }
}

type Props = {
    items: Array<ExperienceItem>
}

const Expertise: FC<Props> = ({items}) => {
    return (
        <div className='expertiseWrapper' id='experience' data-testid='experience'>
            <Title title='Expertise'/>
            {items?.map((item) => (
                <div className='expertiseItem' key={`${item.info.company}_${item.date}`}>
                    <Title title={item.info.company} type='secondary' className='expertiseHeader'/>
                    <Title title={item.info.job} type='secondary' className='expertiseHeader'/>
                    <p className='expertiseDate'>{item.date}</p>
                    <p className='expertiseDesc'>{item.info.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Expertise;
