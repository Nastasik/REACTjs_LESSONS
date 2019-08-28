import React from 'react'

function Widget(props) {
console.log(props, 'propsW')
console.log(props.children,'CHILDREN')
    return (
        <div className = 'widget'>            
            <h2>{props[0].category}</h2>  
            {props.children}                      
        </div>
    )
}

export default Widget;

