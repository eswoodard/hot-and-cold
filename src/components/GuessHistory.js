import React from 'react';
import './GuessHistory.css';



function GuessHistory(props) {
  let list = props.history.map((number, index) => {
    return <li key={index}>{number}</li>
  });

    return (
      <div className="guess-history">
        <ul>
          {list}
        </ul>
      </div>

    );

}

export default GuessHistory;
