import './Palette.css'
import React from 'react'
import ColorBox from './ColorBox'
import uuidv4 from 'uuid/v4'

class Palette extends React.Component {
  renderColors () {
    return this.props.colors.map(color => <ColorBox key={uuidv4()} color={color} /> )
  }
  render () {
    console.log(this.props.colors)
    return (
      <div className='Palette'>
        <div className='Palette-colors'>
          {this.renderColors()}
        </div>
      </div>
    )
  }
}

export default Palette
