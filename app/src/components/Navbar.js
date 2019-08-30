import React from "react"

export default class Navbar extends React.Component {
  state = {
    score: 0,
    highScore: 0
  }

  updateScore = () => {
    this.setState({
      score: this.state.score + 1,
      highScore: this.state.score + 1 
    })
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark sticky-top drop-shadow justify-content-center">
        <a className="text-decoration-none text-white mr-4" href="/">Memory Game</a>
        <span className="text-white ml-4" id="scores">Score: <span>{this.state.score}</span> | High Score: <span>{this.state.highScore}</span></span>
      </nav>
    )
  }
}
