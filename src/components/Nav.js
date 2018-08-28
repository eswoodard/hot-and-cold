import React from 'react';
import './Nav.css';

function Nav (props) {

    return (
        <nav className="nav">
          <button className="what-button">WHAT?</button>
          <button className="new-game-button" onClick={props.onClick}>+ NEW GAME</button>
        </nav>
    );
  }


export default Nav;
