import React from 'react'
import './Footer.css'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <span>
          {this.props.paletteName}
          &nbsp;
          &nbsp;
          {this.props.emoji}
        </span>
      </footer>
    );
  }
}

export default Footer
