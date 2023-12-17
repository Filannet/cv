import React, {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import './Button.scss';

type Props = {
    text?: string,
    type?: 'back' | 'menu' | 'scroll',
    icon?: IconProp,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    isDisabled?: boolean
}

const Button: FC<Props> = ({text = '', type = '', icon, onClick, isDisabled = false}) => {
        return (
            <button
                className={`button ${type ? type : ''}`}
                onClick={onClick}
                disabled={isDisabled}
            >
                {!!icon && <FontAwesomeIcon icon={icon}/>}<span>{text}</span>
            </button>
    );
};

export default Button;
