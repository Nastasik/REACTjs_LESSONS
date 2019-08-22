import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {
    const {message} = props
    
    return (
        <>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{message.from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="message my-message">{message.text}</div>
        </>
    )
}

Message.propTypes = {
    message: PropTypes.instanceOf(Object).isRequired
}

export default Message

