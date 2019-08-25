import React, { useRef } from 'react';
import nanoid from 'nanoid';
import PropTypes from 'prop-types';

function SelectPhoto(props) {
    const {setFiles} = props;
    const fileRef = useRef();

    const handleChange = (event) => {
        event.preventDefault();
        const newFiles = [];
        for (let file of fileRef.current.files) {
            (file.type.includes('image')) && newFiles.push({id: nanoid(), name: file.name, url: URL.createObjectURL(file)})            
        };
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
    }

    return (
        <div>
            <input name="files" type="file" ref={fileRef} onChange={handleChange} accept="image/*" multiple hidden/>
            <button onClick={() => fileRef.current.click()} className='select'>Click to select</button>
        </div>
    )
};

SelectPhoto.propTypes = {
    setFiles: PropTypes.func
};

export default SelectPhoto;