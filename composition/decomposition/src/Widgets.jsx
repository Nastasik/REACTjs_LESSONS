import React from 'react'
// import PropTypes from 'prop-types'


function Widgets(props) { 
    return (
        <div className = "widgets">            
           {props.children}
        </div>
    )
}

export default Widgets;

