import React from "react"

export default class Navbar extends React.Component {
  state = {
    score: 0,
    highScore: 0
  }

  updateScore = (addPoint) => {
    if (addPoint && this.state.score === this.state.highScore) {
      this.setState({
        score: this.state.score + 1,
        highScore: this.state.score + 1
      })
    } else if (addPoint) {
      this.setState({
        score: this.state.score + 1,
      })
    } else {
      this.setState({
        score: 0
      })
    }
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
