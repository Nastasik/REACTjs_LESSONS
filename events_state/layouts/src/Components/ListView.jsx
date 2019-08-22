import React from 'react'
import PropTypes from 'prop-types'

export default function ListView(props) {
    const {items} = props;
    
    return (
      <div className='list-view'>
        <div className='list'>
          {items.map(item =>
            <div className="shop-item" key={`${item.name}${item.color}${item.price}`}>
              <div className="thumb">
                <figure>
                  <img src={item.img} alt={item.name}/>
                </figure>
              </div>
              <div className="title">{item.name}</div>
              <div className="desc">{item.color}</div>
              <div className="price">{item.price}</div>
              <button className='btn'><span className='bg'>add to cart</span></button>
            </div>
          )}
        </div>
      </div>   
    )
};

ListView.propTypes = {
    items: PropTypes.instanceOf(Object).isRequired,
};