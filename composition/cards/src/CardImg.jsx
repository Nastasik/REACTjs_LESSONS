import React from 'react'
import PropTypes from 'prop-types'

function CardImg(props) {
    return (
        <div className = "image">
            <label>{props.name}</label>
            <img src={props.imgSrc} className="card-img-top" placeholder={props.name} alt=''/>
             {console.log(props.imgSrc)}
        </div>
    )
}

CardImg.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string
}

export default CardImg;