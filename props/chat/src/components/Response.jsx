import React from 'react'
import PropTypes from 'prop-types'

function Response(props) {
    const {response} = props
    return (
        <>
            <div className="message-data align-right">
                <span className="message-data-time">{response.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{response.from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">{response.text}</div>
        </>
    )
}

Response.propTypes = {
    response: PropTypes.instanceOf(Object).isRequired
}

export default Response

