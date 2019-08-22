import React from 'react'
import PropTypes from 'prop-types'


export default function CardsView(props) {
    const {cards} = props;
    return (
        <div className='cards-view'>
            {cards.map(card => (
                <div className="shop-card" key={`${card.name}${card.color}${card.price}`}>
                    <div className="title">{card.name}</div>
                    <div className="desc">{card.color}</div>
                    <div>
                        <figure>
                            <img src={card.img} alt={card.name}/>
                        </figure>
                    </div>
                    <div className="cta">
                        <div className="price">{card.price}</div>
                        <button className='btn'><div className='bg'>add to cart</div></button>
                    </div>
                </div>
            ))}
        </div>
    )
}


CardsView.propTypes = {
    cards: PropTypes.instanceOf(Object).isRequired,
};