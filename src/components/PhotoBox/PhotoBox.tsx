import React, {FC} from 'react';
import './PhotoBox.scss';

type PhotoBoxType = {
    name: string,
    title?: string,
    description?: string,
    avatar: string
}

const PhotoBox: FC<PhotoBoxType> = ({avatar, name, title = '', description = ''}) => {
    return (
        <div className={`photoBox ${!title.length ? 'menu' : ''}`}>
            <img className='photoBoxAvatar' src={avatar} alt='Avatar'/>
            <h1 className='photoBoxName'>{name}</h1>
            {!!title && (
                <h2>{title}</h2>
            )}
            {!!description && (
                <p className='photoBoxDescription'>{description}</p>
            )}
        </div>
    );
};

export default PhotoBox;
