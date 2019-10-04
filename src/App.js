import React, { Component } from "react"
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Game from "./components/Game"
import Footer from "./components/Footer"

export default class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    items: [
      {
        id: 1,
        name: "anduin",
        isGuessed: false
      },
      {
        id: 2,
        name: "arthas",
        isGuessed: false
      },
      {
        id: 3,
        name: "chen",
        isGuessed: false
      },
      {
        id: 4,
        name: "garrosh",
        isGuessed: false
      },
      {
        id: 5,
        name: "guldan",
        isGuessed: false
      },
      {
        id: 6,
        name: "illidan",
        isGuessed: false
      },
      {
        id: 7,
        name: "kaelthas",
        isGuessed: false
      },
      {
        id: 8,
        name: "khadgar",
        isGuessed: false
      },
      {
        id: 9,
        name: "saurfang",
        isGuessed: false
      },
      {
        id: 10,
        name: "sylvanus",
        isGuessed: false
      },
      {
        id: 11,
        name: "thrall",
        isGuessed: false
      },
      {
        id: 12,
        name: "varian",
        isGuessed: false
      }
    ]
  }

  shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * arr.length)
      const tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
    }
  }

  updateScore = (addPoint) => {
    const { score, highScore } = this.state

    if (addPoint && score === highScore) {
      this.setState({
        score: score + 1,
        highScore: score + 1
      })
    } else if (addPoint) this.setState({ score: score + 1 })
    else this.setState({ score: 0 })
  }

  handleClick = (id) => {
    const { items } = this.state
    let addPoint = true

    shuffleArray(items)

    if (!items[id - 1].isGuessed) items[id - 1].isGuessed = true
    else {
      addPoint = false
      for (let i = 0; i < items.length; i++) items[i].isGuessed = false
    }
    this.updateScore(addPoint)
  }

  render() {
    return (
      <div className="wrapper" id="app">
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <div className="page-body">
          <Jumbotron />
          <Game handler={this.handleClick} items={items} />
        </div>
        <Footer />
      </div>
    )
  }
}
