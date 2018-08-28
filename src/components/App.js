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
    let diff = Math.abs(number - this.state.number);
    console.log(diff);

    if (diff >= 20) {
      this.setState({header: "You are cold!"});
    }
    else if (diff >= 11 && diff <= 19) {
      this.setState({header: "You are getting warm!"});
    }
    else if (diff > 1 && diff <= 10) {
      this.setState({header: "You are hot!"});
    }
    else if (diff === 1) {
      this.setState({header: "You are blazing hot!"});
    }
    else if (diff === 0) {
      this.setState({header: "You guessed the number!"});
    }
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
