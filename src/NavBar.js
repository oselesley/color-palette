import './NavBar.css'
import React from 'react'

class NavBar extends React.Component {
  render () {
    return (
      <div className='NavBar'>
        <div className='logo'>reactColorPicker</div>
        <div className='slider'>{this.props.children}</div>
      </div>
    )
  }
}

export default NavBar