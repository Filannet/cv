import React, {FC, ReactNode} from 'react';
import Title from "../Title/Title";
import './Box.scss';

type Props = {
    title: string,
    content: ReactNode
}

const Box: FC<Props> = ({title, content}) => {
    return (
        <div id='box' data-testid='box'>
            <Title title={title}/>
            <p className='boxContent'>{content}</p>
        </div>
    );
};

export default Box;
