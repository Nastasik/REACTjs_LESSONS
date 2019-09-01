import React from 'react'
import PropTypes from 'prop-types'

function WatchesList(props) {

    const {progress, handleDelete} = props 
  
    return (
        <div className="progress">                       
            <ul className="progress-data">
                {progress.map(day =>                  
                    <li key={day.id}>
                        <span>{day.city}</span>
                        <div className = 'clock'>                        
                            <div  style = {{transform: `rotate(${day.hour})`}}  className = 'hour rotate-hours'></div>
                            <div style = {{transform: `rotate(${day.min})`}} className = 'min rotate-min'></div>
                            <div style = {{transform: `rotate(${day.sec})`}} className = 'sec rotate-sec'></div>
                        </div>
                        <button onClick={() => handleDelete(day.id)} className='delete-btn'><i className='material-icons'>X</i></button>
                    </li>
                )}
            </ul>
        </div>
    )
}
WatchesList.propTypes = {
    progress: PropTypes.instanceOf(Array).isRequired    
}

export default WatchesList;

