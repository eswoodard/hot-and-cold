import React from 'react';
import './GameBox.css';
import GameInput from './GameInput';
import GuessCount from './GuessCount';
import GuessHistory from './GuessHistory';
import PlayerFeedback from './PlayerFeedback';


function GameBox(props) {

    return (
      <div className="game-box">
        <PlayerFeedback header={props.header}/>
        <GameInput onSubmit={number=> props.addGuess(number)} />
        <GuessCount number={props.history.length}/>
        <GuessHistory history={props.history}/>
      </div>

    );

}

export default GameBox;
