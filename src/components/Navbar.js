import React from "react"

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark sticky-top drop-shadow justify-content-center">
        <a className="text-decoration-none text-white mr-4" href="/">Memory Game</a>
        <span className="text-white ml-4" id="scores">Score: <span>{this.props.score}</span> | High Score: <span>{this.props.highScore}</span></span>
      </nav>
    )
  }
}
