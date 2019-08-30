import React from "react"



export default class GameItem extends React.Component {
  render() {
    let style = {
      height: 140,
      width: 140,
    }

    let imgSrc = "/images/"

    switch (this.props.item.id) {
      case 1:
        imgSrc += "anduin.png"
        break;

      case 2:
        imgSrc += "arthas.png"
        break;

      case 3:
        imgSrc += "chen.png"
        break;

      case 4:
        imgSrc += "garrosh.png"
        break;

      case 5:
        imgSrc += "guldan.png"
        break;

      case 6:
        imgSrc += "illidan.png"
        break;

      case 7:
        imgSrc += "kaelthas.png"
        break;

      case 8:
        imgSrc += "khadgar.png"
        break;

      case 9:
        imgSrc += "saurfang.png"
        break;

      case 10:
        imgSrc += "sylvanus.png"
        break;

      case 11:
        imgSrc += "thrall.png"
        break;

      case 12:
        imgSrc += "varian.png"
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