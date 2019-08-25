import React, { useState } from 'react'
import SelectPhoto from './SelectPhoto';
import Listing from './Listing';

function Photo() {
    const [files, setFiles] = useState([]);

    return (
        <>
            <SelectPhoto setFiles={setFiles}/>
            <Listing files={files} setFiles={setFiles}/>
        </>
    )
};

export default Photo