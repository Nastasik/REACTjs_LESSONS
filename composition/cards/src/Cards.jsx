import React from 'react';
import Card from './Card';
import nanoid from 'nanoid';

function Cards(props) {
  const cardsContent = [{
    imgSrc: '...',
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    href: '#',
    name: 'Image cap'
  }, {    
    title: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    href: '#'
}]

  return (
    <div className='cards_collection'>
        {cardsContent.map(card => <Card {...card} key = {nanoid()}>{card.children}</Card>)}
    </div>
  )
}

export default Cards;

