import React from 'react';
import './GuessCount.css';



function GuessCount(props) {

    return (
      <div className="guess-count">
        <p>Guess #<span>{props.number}</span>!</p>
      </div>

    );

}

export default GuessCount;
