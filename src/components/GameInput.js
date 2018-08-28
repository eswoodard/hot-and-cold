import React from 'react';
import './GameInput.css';

class GameInput extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    const number = parseFloat(this.numberInput.value.trim());
    this.props.onSubmit(number);
    event.currentTarget.reset();
  }

  render() {
    return (
     <div className="game-body">
        <form className="game-input" onSubmit={(event) => this.onSubmit(event)}>
              <input className="guess-input" type="text" placeholder="Enter Your Guess" ref={input => this.numberInput = input}/>
          <div className="input-button">
              <input type="submit" value="Guess" />
          </div>
        </form>
     </div>
    );
  }
}

export default GameInput;
