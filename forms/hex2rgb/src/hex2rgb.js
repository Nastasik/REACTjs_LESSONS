function hex2rgb(props) {

    const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(props);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` 
                  : null;            
}

export default hex2rgb;