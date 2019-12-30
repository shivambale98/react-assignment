import React from 'react';
import './userOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>userName: {props.userName}</p>
            <p>I hope i can overwrite this text</p>
        </div>
    );
}

export default userOutput;
