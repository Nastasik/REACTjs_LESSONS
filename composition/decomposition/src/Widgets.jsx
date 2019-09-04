import React from 'react'

function Widgets(props) { 
    return (
        <div className = "widgets">            
           {props.children}
        </div>
    )
}

export default Widgets;

