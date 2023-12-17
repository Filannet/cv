import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {faBars,faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Button, Navigation, PhotoBox} from "../index";
import {photoBoxData} from "../../mocks";
import './Panel.scss';

type Props = {
    setIsMenuCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const Panel: FC<Props> = ({setIsMenuCollapsed}) => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/');

    return (
        <aside className={`panelWrapper`}>
            <div className='panelColumn'>
                <PhotoBox name={photoBoxData.name} avatar={photoBoxData.avatar}/>
                <Navigation/>
                <div className='goBackButton'>
                    <Button
                        type='back'
                        icon={faAngleLeft}
                        text='Go back'
                        onClick={handleClick}
                    />
                </div>
            </div>
            <div className='panelColumn'>
                <Button
                    type='menu'
                    icon={faBars}
                    onClick={()=>setIsMenuCollapsed(prevState => !prevState)}
                />
            </div>
        </aside>
    );
};

export default Panel;
