import React, { useState }  from 'react'

function DropdownList() {
    let [selected, setSelected] = useState('');

    const btnList = [
        'Profile Information',
        'Change Password',
        'Become PRO',
        'Help',
        'Log Out',
    ];    

    return (
        <ul className="dropdown">
                {btnList.map((option, i) => (
                    <li                        
                        onClick={(event) => setSelected(event.target.innerHTML)}
                        className={option === selected ? "active" : ""} 
                        key = {i}>
                             <a href="#7">{option}</a>
                    </li>
                ))}
        </ul>       
    );
}


export default DropdownList


