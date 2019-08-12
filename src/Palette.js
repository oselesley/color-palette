import './Palette.css'
import React from 'react'
import ColorBox from './ColorBox'
import uuidv4 from 'uuid/v4'

class Palette extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      colors: this.props.colors.map(color => {
        const id = uuidv4();
        return { ...color, id }
      })
    }
  }
  renderColors () {
    return this.state.colors.map(color => <ColorBox key={color.id} color={color} id={color.id} />)
  }
  render () {
    console.log(this.state.colors)
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
