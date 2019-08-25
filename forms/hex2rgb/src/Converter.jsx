import React, { useState } from 'react';
import hex2rgb from './hex2rgb.js';

function Converter() {
    const [hex, setHex] = useState('');
    const [rgb, setRgb] = useState(null);
    const [error, setError] = useState(false);

    const handleHex = event => {       
        const {value} = event.target;

        if (value.length <= 7) {
            setHex(value)
            setRgb(null)
            setError(false);
        }
        
        if (value.length === 7) {
            const result = hex2rgb(value);
            (!result) && setError(true);
            setRgb(result || 'red');
        }
    }

    return (
        <div className='converter' style={{background: rgb}}>
            <input type='text' value={hex} onChange={handleHex} placeholder='#123456'/>
            <div className='btn'>  
                <p>{error ? 'Ошибка!' : rgb}</p> 
            </div>
        </div>
    )
}

export default Converter