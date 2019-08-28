import React from 'react'

function CardContent(props) {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.href} className="btn btn-primary">Go somewhere</a>
        </div>
    )
}

export default CardContent;

