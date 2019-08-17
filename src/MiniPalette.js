import './MiniPalette.css'
import React from 'react'
import { Link } from 'react-router-dom'

class MiniPalette extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  renderColors () {
    return this.props.palette.colors.map(color => <div className='mini-colorbox' style={{ backgroundColor: color.color }} id={`color.name-${this.props.id}`} key={color.color}>&nbsp;</div>)
  }
  handleClick () {
    console.log(this.props)
    this.props.history.push(`/palette/${this.props.palette.id}`)
  }
  render () {
    return (
      <div className="MiniPalette" onClick={this.handleClick}>
        <div className="MiniPalette-colors">{this.renderColors()}</div>
        <div className="MiniPalette-data">
          <h3>{this.props.palette.paletteName}</h3>
          <span>{this.props.palette.emoji}</span>
        </div>
      </div>
    );
  }
}

export default MiniPalette
