import React from 'react';
import './PlayerFeedback.css';

function PlayerFeedback(props) {
    return (
      <h1 className="feedback">{props.header}</h1>

    );
}

export default PlayerFeedback;
