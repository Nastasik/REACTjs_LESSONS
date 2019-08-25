import React, { useState } from 'react'
import InputForms from './InputForms';
import Listing from './Listing';

function Steps() {
    const [progress, setProgress] = useState([]);
    const [form, setForm] = useState({date: '', distance: ''});

    return (<>
        <InputForms form={form} setForm={setForm} setProgress={setProgress}/>
        <Listing progress={progress} setForm={setForm} setProgress={setProgress}/>
    </>)
}

export default Steps;

