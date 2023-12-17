import React, {FC, useMemo, useState} from 'react';
import {Title} from "../index";
import './Portfolio.scss';

interface PortfolioItem {
    id: number,
    title: string,
    description: string,
    link: string,
    image: string,
    type: string
}

type Props = {
    items: Array<PortfolioItem>
}

const Portfolio: FC<Props> = ({items}) => {
    const [tab, setTab] = useState('all');
    const cards = useMemo(() => {
        return items.filter((item) => item.type === tab || tab === 'all');
    }, [items, tab]);

    return (
        <div className='portfolioWrapper' id='portfolio' data-testid='portfolio'>
            <Title title='Portfolio'/>
            <ul className='portfolioNavigation'>
                <li className={`portfolioNavigationItem ${tab === 'all' ? 'active' : ''}`} onClick={() => setTab('all')}>All</li>
                <li className={`portfolioNavigationItem ${tab === 'code' ? 'active' : ''}`} onClick={() => setTab('code')}>Code</li>
                <li className={`portfolioNavigationItem ${tab === 'ui' ? 'active' : ''}`} onClick={() => setTab('ui')}>UI</li>
            </ul>
            <div className='portfolioCards'>
                {cards?.map((card) => (
                    <div className='portfolioCard' key={card.id}>
                        <img className='portfolioCardImage' src={card.image} alt=''/>
                        <div className='portfolioCardContent'>
                            <h3 className='portfolioTitle'>{card.title}</h3>
                            <p className='portfolioDescription'>{card.description}</p>
                            <a className='portfolioLink' href={card.link} target='_blank' rel="noreferrer">View resource</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
