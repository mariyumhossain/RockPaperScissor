import React, {Component} from 'react';
import PlayerCard from "./PlayerCard.js"

class Game extends Component{
    constructor(){
      super()
      this.sign = ["rock","scissors","paper"]
      this.state = {
        playerOne: "rock",
        playerTwo: "scissors"
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

  render(){
    return (
      <div className="style">
        <div>
          <PlayerCard sign={this.state.playerOne}></PlayerCard>
          <PlayerCard sign={this.state.playerTwo}></PlayerCard>
        </div>
    <div className="winner">{this.decideWinner()}</div>
        <button className="button" onClick={this.playGame}>Play the Game</button>
      </div>
    )
  }
}

export default Game