import React from 'react'
import PropTypes from 'prop-types'

function Typing(props) {
    const {typing} = props
    return (
        <>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{typing.from.name}</span>
                <span className="message-data-time">{typing.time}</span>
            </div>
            <div>...Печатает сообщение</div>
        </>
    )
}

Typing.propTypes = {
    typing: PropTypes.instanceOf(Object).isRequired
}

export default Typing

