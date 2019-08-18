import './ColorBox.css'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { NavLink, withRouter } from 'react-router-dom'

class ColorBox extends React.Component {
  constructor () {
    super()
    this.handleCopy = this.handleCopy.bind(this)
    this.goBack = this.goBack.bind(this)
    this.state = { copied: false }
  }
  handleCopy () {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }
  goBack () {
    this.props.history.goBack()
  }
  render () {
    // console.log(this.props, this.props.format);
    const { name } = this.props
    const { type, color, colorName, id } = this.props
    const format = type === 'singlePalette' ? color : this.props[this.props.format]
    const { paletteID } = this.props
    const height = type && '50%'
    const width = type && '20%'
    return (
      <CopyToClipboard text={format}>
        <div
          className={`ColorBox`}
          style={
            !type
              ? { backgroundColor: `${format}` }
              : { backgroundColor: `${format}`, height, width }
          }
          onClick={id === "return" ? this.goBack : this.handleCopy}
        >
          <div
            className={`copy-overlay ${this.state.copied ? "show" : ""}`}
            style={{ backgroundColor: `${format}` }}
          />
          <div className={`copy-msg ${this.state.copied ? "show" : ""}`}>
            <div className="copy-text">
              <h1>Copied!</h1>
              <p>{format}</p>
            </div>
          </div>
          <div className="color-box-content">
            <div className="copy">
              {id !== "return" ? "COPY" : "Go BACK"}
            </div>
            <div className="color-box-footer">
              <span className="name">{name || colorName}</span>
              {type !== "singlePalette" && (
                <NavLink
                  to={`/palette/${paletteID}/${id}`}
                  className="more"
                >
                  MORE
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default withRouter(ColorBox)

// <div
//   className={`${this.props.selected && "overlay"}`}
//   style={{
//     backgroundColor: `${color}, width: '100%, height: '100%`
//   }}
// />
