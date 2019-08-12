import './ColorBox.css'
import React from 'react'

class ColorBox extends React.Component {
  render () {
    const { name, color } = this.props.color
    return (
      <div className='ColorBox' style={{ backgroundColor: `${color}` }}>
        <div className='color-box-content'>
          <div className='copy'>Copy</div>
          <div className='color-box-footer'>
            <span className='name'>{name}</span>
            <span className='more'>MORE</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ColorBox
