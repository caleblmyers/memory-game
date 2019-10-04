import React from "react"
import anduin from "../images/anduin.png"
import arthas from "../images/arthas.png"
import chen from "../images/chen.png"
import garrosh from "../images/garrosh.png"
import guldan from "../images/guldan.png"
import illidan from "../images/illidan.png"
import kaelthas from "../images/kaelthas.png"
import khadgar from "../images/khadgar.png"
import saurfang from "../images/saurfang.png"
import sylvanus from "../images/sylvanus.png"
import thrall from "../images/thrall.png"
import varian from "../images/varian.png"

export default class GameItem extends React.Component {
  render() {
    let style = {
      height: 140,
      width: 140,
    }

    let imgSrc

    switch (this.props.item.id) {
      case 1:
        imgSrc = anduin
        break;

      case 2:
        imgSrc = arthas
        break;

      case 3:
        imgSrc = chen
        break;

      case 4:
        imgSrc = garrosh
        break;

      case 5:
        imgSrc = guldan
        break;

      case 6:
        imgSrc = illidan
        break;

      case 7:
        imgSrc = kaelthas
        break;

      case 8:
        imgSrc = khadgar
        break;

      case 9:
        imgSrc = saurfang
        break;

      case 10:
        imgSrc = sylvanus
        break;

      case 11:
        imgSrc = thrall
        break;

      case 12:
        imgSrc = varian
        break;

      default:
        style.background = "black"
    }

    return (
      <div className="border bg-white shadow game-item" style={style}>
        <img src={imgSrc} style={style} alt={this.props.item.name} />
      </div>
    )
  }
}