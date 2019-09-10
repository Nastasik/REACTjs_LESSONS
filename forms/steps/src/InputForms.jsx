import React from 'react'
import PropTypes from 'prop-types'
import StepsItem from './StepsItem.js'
import nanoid from 'nanoid';

function InputForms(props) {
    const {form, setForm, setProgress} = props;

    const handleChange = event => {
        const {name, value} = event.target;        
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newDay = new StepsItem(nanoid(), form.date, form.distance);

        setProgress(prevProgress => {            
            for (let prevDay of prevProgress) {
                if (prevDay.date === newDay.date) {
                    if(prevDay.flag ===  'edit') {
                        prevDay.distance = Number(newDay.distance);
                        return prevProgress.sort(sortDays);
                    }
                    prevDay.distance = Number(newDay.distance) + Number(prevDay.distance);
                    return prevProgress.sort(sortDays);
                }
            }            
            return [...prevProgress, newDay].sort(sortDays);
        });

        setForm({date: '', distance: ''});
    }

    const sortDays = (date1, date2) => (

        ((date1.date > date2.date) && -1) ||
        ((date1.date < date2.date) && 1 ) ||
         0        
    )
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date">Дата</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="distance">Пройдено км</label>
                <input type="number" step="any" name="distance" value={form.distance} onChange={handleChange} required/>
            </div>
            <button type="submit">OK</button>
        </form>
    )
}

InputForms.propTypes = {
    form: PropTypes.instanceOf(Object).isRequired,
    setForm: PropTypes.func.isRequired,
    setProgress: PropTypes.func.isRequired,
}

export default InputForms;
