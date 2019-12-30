import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '5px solid green' 
    };

    return  <input 
    type="text" 
    style={inputStyle}
    onChange={props.changed} 
    value={props.currentName} />;
};

export default userInput;