import React from 'react';
import './GuessCount.css';



class GuessCount extends React.Component {
  render() {
    return (
      <div className="guess-count">
        <p>Guess #<span>{this.props.number}</span>!</p>
      </div>

    );
  }
}

export default GuessCount;
