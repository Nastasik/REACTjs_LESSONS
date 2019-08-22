import React from 'react'
import PropTypes from 'prop-types'
import Response from './Response'
import Message from './Message'
import Typing from './Typing'

function MessageHistory(props) {
    const {list} = props || []

    return (
        <ul>
            {list.map(msg => (
                <li className="clearfix" key={msg.id}>
                    {msg.type === 'response' && <Response response={msg}/>}
                    {msg.type === 'message' && <Message message={msg}/>}
                    {msg.type === 'typing' && <Typing typing={msg}/>}
                </li>
            ))}
        </ul>
    )
}

MessageHistory.propTypes = {
    list: PropTypes.instanceOf(Array).isRequired
}

export default MessageHistory

