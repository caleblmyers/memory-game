import React from "react"
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Game from "./components/Game"
import Footer from "./components/Footer"

const items = [
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

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.navbarElement = React.createRef()
  }

  handleClick = (id) => {
    console.log(items[id - 1].name)
    let addPoint = true
    if (!items[id - 1].isGuessed) {
      items[id - 1].isGuessed = true
    } else {
      addPoint = false
    }
    this.navbarElement.current.updateScore(addPoint)
  }

  // state = {
  //   score: 0,
  //   highScore: 0
  // }

  // handleGuess(id) {
  // console.log(items[id-1].name)

  // if (!items[id-1].isGuessed) {
  //   this.setState({
  //     score: 0
  //   })
  //   for (let i = 0; i < items.length; i++) {
  //     items[i].isGuessed = false
  //   }
  // } else {
  //   items[id-1].isGuessed = true
  //   this.setState({
  //     score: this.state.score + 1,
  //     highScore: this.state.score
  //   })
  // }
  // }

  render() {
    return (
      <div className="wrapper" id="app">
        <Navbar ref={this.navbarElement} />
        <div className="page-body">
          <Jumbotron />
          <Game handler={this.handleClick} items={items} />
        </div>
        <Footer />
      </div>
    )
  }
}
