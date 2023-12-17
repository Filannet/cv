import React, {FC, Fragment, useEffect} from 'react';
import {Error, Spinner, Title} from "../index";
import {AppDispatch, RootState} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchEducation} from "../../redux/reducers/educationSlice";
import {TimeLineItem} from "../TimeLineItem";
import './TimeLine.scss';

type Props = {
    items: Array<TimeLineItem>
}

const TimeLine: FC<Props> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {items, isLoading, isError} = useSelector((state: RootState) => state.education);

    useEffect(() => {
        dispatch(fetchEducation());
    }, [dispatch]);

    return (
        <div className='timeLineWrapper' id='education' data-testid='education'>
            <Title title='Education'/>
            {isLoading && <Spinner/>}
            {isError && <Error/>}
            {!isLoading && !isError && (
                <div className='timeLineItems'>
                    {items?.map(({date, title, text}) => (
                        <Fragment key={`${date}_${title}`}>
                            <TimeLineItem date={date} title={title} text={text}/>
                        </Fragment>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TimeLine;
