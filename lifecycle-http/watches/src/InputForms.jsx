import React from 'react'

function InputForms(props) {
    const {city, timezone, onSubmit, onChange} = props;

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <div>
                <label htmlFor="city">Название</label>
                <input type="text" name="city" value={city} onChange={(event) => onChange(event)} required/>
            </div>
            <div>
                <label htmlFor="timezone">Часовой пояс</label>
                <input type="text" step="any" name="timezone" value={timezone} onChange={(event) => onChange(event)} required/>
            </div>
            <button type="submit">Добавить</button>
        </form>
    )
}

export default InputForms;