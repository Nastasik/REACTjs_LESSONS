import React, { useState } from 'react'
import DropdownList from './DropdownList';

function Dropdown() {
    let [state, setState] = useState(false);

    const handleClick = () => {
        setState(prevState => !prevState)            
    };
    
    return (   
        <div className={`dropdown-wrapper ${state ? "open" : ""}`} >
            <button className={"btn"} onClick={handleClick}>
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>
            <DropdownList/>
      </div>          
    )
}

export default Dropdown

