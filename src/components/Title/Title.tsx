import React, {FC} from 'react';
import './Title.scss';

type Props = {
    title: string | number;
    type?: 'primary' | 'secondary';
    className?: string
}

const Title: FC<Props> = ({title, type = 'primary', className = ''}) => {
    return (
        <>
            {(type === "primary") ? (
                <h2 className={`title ${className}`}>{title}</h2>
            ) : (
                <h3 className={`title secondary ${className}`}>{title}</h3>
            )}
        </>
    )
};

export default Title;
