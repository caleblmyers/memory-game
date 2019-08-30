import React from "react"
import GameItem from "./GameItem"

export default class Game extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          {this.props.items.map(item => (
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 my-3" key={item.id} onClick={() => this.props.handler(item.id)}>
              <GameItem item={item} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}