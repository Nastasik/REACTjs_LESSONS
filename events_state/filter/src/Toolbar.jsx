import React from 'react';
import './App.css';

const Toolbar = (props) => {    
    const {filters, selected, onSelectedFilter} = props;  
       
    return (
        <div className = "toolbar">  
            {filters.split(",").map((filter, i) => (
                <button className = {filter === selected ? "filter-selected" : "filter"} 
                                    onClick = {() => onSelectedFilter(filter)}
                                    key = {i}
                >{filter}</button>
                ))}
        </div>
    );
}

export default Toolbar;


