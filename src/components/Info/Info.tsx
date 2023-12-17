import React, {FC} from 'react';
import {Title} from "../Title";
import './Info.scss';

type Props = {
    text: string,
    title?: string
}

const Info: FC<Props> = ({text, title = ''}) => {
    return (
        <div className='infoText'>
            {!!title && (
                <Title title={title} type='secondary' className='infoTitle'/>
            )}
            {text}
        </div>
    );
};

export default Info;
