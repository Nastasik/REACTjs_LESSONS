import React from 'react'
import nanoid from 'nanoid';

function WidgetList(props) {
    const {...items} = props;    
    const itemsArr = Object.keys(items).map(item => items[item]);

    return (
        
        <ul className = 'widget-list'>
            {itemsArr.map(item => item !== undefined && (item.currency1 === undefined ? 
                                (<li key={nanoid()} className = 'column'>
                                    {item.src !== undefined && <label> 
                                                                    <img src = {item.src} alt=''/>
                                                                </label>}                                 
                                    <a href = '#2'>{item.title}</a>                                                                        
                                    <p>{item.time}</p>
                                    <p>{item.desription}</p> 
                                    <p style={{ color: "grey"}}>{item.channel}</p>
                                </li>) : <li key={nanoid()} className = 'row'>
                                    <a href = '#8'>{item.currency1}</a>
                                    <a href = '#9'>{item.currency2}</a>
                                    <p>{item.value}</p>
                                    <p style={{ color: "grey"}}>{item.trend}</p>
                                </li>))}
        </ul>
        
    )
}

export default WidgetList;

