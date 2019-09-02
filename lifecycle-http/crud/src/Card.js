import React, { Component } from 'react';

export class Card extends Component {
    render() {
        const {content, onRemove} = this.props;
        
        return (
            <div className='card'>
                <div>{content}</div>
                <button onClick={onRemove}>x</button>
            </div>
        );
    }
}

export default Card;