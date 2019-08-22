import React from 'react'
import PropTypes from 'prop-types'


function Listing(props) {
    const {items} = props || []

    return (
        <div className="item-list">
            {items.map(item => (
                    item.state === 'active'  && <div className="item" key={item.listing_id}>
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage.url_570xN} alt={`${item.listing_id}_img`}/>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{item.title.length >= 50 && `${item.title.slice(0,50)}...`}</p>
                                <p className="item-price">
                                    {item.currency_code === 'USD' && `$${item.price}`}
                                    {item.currency_code === 'EUR' && `€${item.price}`}
                                    {item.currency_code !== 'USD' && item.currency_code !== 'EUR' && `${item.price} ${item.currency_code}`}                           
                                </p>
                            <p className={
                                (item.quantity <= 10 && 'item-quantity level-low') ||
                                (item.quantity > 10 && item.quantity <= 20 && 'item-quantity level-medium') ||
                                (item.quantity > 20 && 'item-quantity level-high')
                            }>{item.quantity} left</p>
                        </div>
                    </div>
                )
            )}       
        </div>
    )
}

Listing.propTypes = {
    items: PropTypes.array
}

export default Listing