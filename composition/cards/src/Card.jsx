import React from 'react'
import CardImg from './CardImg'
import CardContent from './CardContent'

function Card(props) {
    
    return (
        <div className="card">
            {props.imgSrc === undefined || <CardImg {...props}/>} 
            <CardContent {...props}>{props.children}</CardContent>
        </div>
    )
}

export default Card;

