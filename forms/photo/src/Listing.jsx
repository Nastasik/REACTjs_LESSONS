import React from 'react';
import PropTypes from 'prop-types';

function Listing(props) {
    const {files, setFiles} = props;

    const deleteFile = (id) => {
        setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
    };

    return (
        <ul className='files'>
            {files.map(file =>
                <li key={file.id}>
                    <img src={file.url} alt={file.name}/>
                    <button onClick={() => deleteFile(file.id)}>X</button>
                </li>
            )}
        </ul>
    )
};

Listing.propTypes = {
    files: PropTypes.instanceOf(Array).isRequired,
    setFiles: PropTypes.func
};

export default Listing;