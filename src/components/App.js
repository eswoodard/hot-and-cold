import React from 'react';
import './App.css';
import Nav from './Nav';
import GameBox from './GameBox';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      header: 'Make your Guess!',
      guess: 0,
      guessCount: 0,
      guessHistory: [],
    }
    this.handleGameStart = this.handleGameStart.bind(this);
    this.addGuess = this.addGuess.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleGameStart());
  }

  handleGameStart() {
    this.setState({number: this.chooseRandomNumber(), header: 'Make your Guess!', guess: 0, guessCount: 0, guessHistory: []});
  }

  chooseRandomNumber() {
    let number = Math.floor(Math.random() * 101);
    return number;
  }

  addGuess(number) {
    this.setState({guess: number, guessHistory: this.state.guessHistory.concat([number])});
    if (number === this.state.number) {
      this.setState({header: "You guessed the right number!"});
    }
    else if (number >= this.state.number-10 && number <= this.state.number+10) {
      this.setState({header: "You are hot!"});
    }
    else {this.setState({header: "You are cold!"})}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav onClick={this.handleGameStart}/>
        </header>
        <h1 className="App-title">Hot or Cold</h1>
        <GameBox  header={this.state.header} addGuess={this.addGuess} guess={this.state.guessCount} history={this.state.guessHistory}/>

      </div>
    );
  }
}

export default App;
