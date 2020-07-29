import React, {Component} from 'react';
import PlayerCard from "./PlayerCard.js"

class Game extends Component{
    constructor(){
      super()
      this.sign = ["rock","scissors","paper"]
      this.state = {
        playerOne: "rock",
        playerTwo: "scissors",
        nameOne: "Math",
        nameTwo: "Algebra",

      }
    }


playGame = () => {
  this.setState({
    playerOne: this.sign[Math.floor(Math.random()*3)],
    playerTwo: this.sign[Math.floor(Math.random()*3)]
  })
}

decideWinner = () => {
  const playerOne = this.state.playerOne
  const playerTwo = this.state.playerTwo
  if(playerOne === playerTwo){
    return "It's a tie!"
  } else if ((playerOne === "rock" && playerTwo === "scissors")
  ||(playerOne === "paper" && playerTwo === "rock")
  ||(playerOne === "scissors" && playerTwo === "paper")){
    return "Player 1 Wins!"
  }else{
    return "Player 2 Wins!"
  }
}
playRock = () => {
  this.setState({
    playerOne: "rock",
    playerTwo: this.sign[Math.floor(Math.random()*3)]
  })
}

playPaper = () => {
  this.setState({
    playerOne: "paper",
    playerTwo: this.sign[Math.floor(Math.random()*3)]
  })
}

playScissor = () => {
    this.setState({
      playerOne: "scissors",
      playerTwo: this.sign[Math.floor(Math.random()*3)]
    })
}
  render(){
    return (
      <div className="style">
        <div>
          <PlayerCard id="player" className="playerOne" sign={this.state.playerOne}></PlayerCard>
          <div> Player 1: {this.state.nameOne}</div>
         
          <PlayerCard id="player" className="playerOne" sign={this.state.playerTwo}></PlayerCard>
          <div>Player 2: {this.state.nameTwo}</div>
        </div>
    <div className="winner">{this.decideWinner()}</div>
        <button className="button" onClick={this.playGame}>Play the Game</button>
        <div id="chooseHand">Player 1: Choose your hand</div>
        <button id="button2" onClick={this.playRock}>Rock</button>
        <button id= "button2" onClick={this.playPaper}>Paper</button>
        <button id = "button2" onClick={this.playScissor}>Scissor</button>
       </div>
    )
  }
}

export default Game