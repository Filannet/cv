import React, {FC} from 'react';
import {Title} from "../Title";
import {Info} from "../Info";
import './TimeLineItem.scss';

interface TimeLineItem {
    date: number,
    title: string,
    text: string,
}

const TimeLineItem: FC <TimeLineItem> = ({date, title, text}) => {
    return (
        <div className='timeLineItem' >
            <div className='timeLineDate'>
                <Title title={date} type='secondary' className='timeLineDateValue'/>
                <div className='timeLineVertical'/>
            </div>
            <div className='timeLineDesc'>
                <Info
                    title={title}
                    text={text}
                />
            </div>
        </div>
    );
};

export default TimeLineItem;
