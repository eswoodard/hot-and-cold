import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
        <nav className="nav">
          <button className="what-button">WHAT?</button>
          <button className="new-game-button" onClick={this.props.onClick}>+ NEW GAME</button>
        </nav>

    );
  }
}

export default Nav;
