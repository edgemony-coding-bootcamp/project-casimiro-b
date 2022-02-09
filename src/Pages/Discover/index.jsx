import DiscoverCard from './DiscoverCard';
import { useState, useEffect } from 'react';
import '../../Tools/discover.json';

const data = require('../../Tools/discover.json');

const Discover = () => {

    const [card, setCard] = useState();

    useEffect(() => {
        setCard(data);
        console.log(data);
    }, [])


    return (
        <div>
            {card?.map((item, index) =>
                <DiscoverCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    icon={item.icon}
                    image={item.image}
                    date={item.date}
                />)}

        </div>

    )
}

export default Discover;