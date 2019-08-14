import './ColorBox.css'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ColorBox extends React.Component {
  constructor () {
    super()
    this.handleCopy = this.handleCopy.bind(this)
    this.state = { copied: false }
  }
  handleCopy () {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }
  render () {
    const { name } = this.props.color
    const format = this.props.color[this.props.format]
    return (
      <CopyToClipboard text={format}>
        <div
          className={`ColorBox`}
          style={{ backgroundColor: `${format}` }}
          onClick={this.handleCopy}
        >
          <div
            className={`copy-overlay ${this.state.copied ? "show" : ""}`}
            style={{ backgroundColor: `${format}` }}
          />
          <div className={`copy-msg ${this.state.copied ? "show" : ""}`}>
            <div className='copy-text'>
              <h1>Copied!</h1>
              <p>{format}</p>
            </div>
          </div>
          <div className="color-box-content">
            <div className="copy">Copy</div>
            <div className="color-box-footer">
              <span className="name">{name}</span>
              <span className="more">MORE</span>
            </div>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox

// <div
//   className={`${this.props.selected && "overlay"}`}
//   style={{
//     backgroundColor: `${color}, width: '100%, height: '100%`
//   }}
// />
