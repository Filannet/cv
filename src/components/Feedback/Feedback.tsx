import React, {FC, Fragment} from 'react';
import {Info, Title} from "../index";
import './Feedback.scss';


interface FeedbackItem {
    feedback: string,
    reporter: {
        photoUrl: string,
        name: string,
        citeUrl: string
    }
}

type Props = {
    items: Array<FeedbackItem>
}

const Feedback: FC<Props> = ({items}) => {
    return (
        <div className='feedbackWrapper' id='feedback' data-testid='feedback'>
            <Title title={'Feedback'}/>
            {items?.map((item) => (
                <Fragment key={`${item.reporter.name}_${item.reporter.citeUrl}`}>
                    <Info text={item.feedback}/>
                    <div className='feedbackReporter'>
                        <img className='feedbackAvatar' src={item.reporter.photoUrl} alt='' />
                        <p className='feedbackName'>{item.reporter.name}, <a className='feedbackSite' href={item.reporter.citeUrl} target='_blank' rel="noreferrer">{item.reporter.citeUrl}</a></p>
                    </div>
                </Fragment>
            ))}
        </div>
    );
};

export default Feedback;
