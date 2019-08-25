import React from 'react'
import PropTypes from 'prop-types'

function Listing(props) {
    const {progress, setForm, setProgress} = props

    const handleDelete = id => {
      setProgress(prevProgress => prevProgress.filter(item => item.id !== id));      
    }

    const handleEdit = id => {
        const day = progress.find((item) => item.id === id);
        setForm({date: day.date, distance: day.distance});
        handleDelete(id);
    }

    return (
        <div className="progress">
            <ul className="progress-headers">
                <li>Дата</li>
                <li>Пройдено км</li>
                <li>Действия</li>
            </ul>            
            <ul className="progress-data">
                {progress.map(day => <li key={day.id}>
                    <span>{day.date}</span>
                    <span>{day.distance}</span>
                    <div>
                        <button onClick={() => handleEdit(day.id)}><i className='material-icons'>edit</i></button> 
                        <button onClick={() => handleDelete(day.id)}><i className='material-icons'>delete</i></button>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}
Listing.propTypes = {
    progress: PropTypes.instanceOf(Array).isRequired, 
    setForm: PropTypes.func.isRequired, 
    setProgress: PropTypes.func.isRequired
}
export default Listing;