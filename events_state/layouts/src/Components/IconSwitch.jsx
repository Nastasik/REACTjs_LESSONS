import React from 'react'
import PropTypes from 'prop-types'

export default function IconSwitch(props) {
    const {icon, onSwitch} = props

    return (
      <div className='toolbar'>
        <div className='switch-view'>
            <button onClick={onSwitch}><i className='material-icons'>{icon}</i></button>
        </div>
      </div> 
    )
};

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.instanceOf(Function).isRequired,
};