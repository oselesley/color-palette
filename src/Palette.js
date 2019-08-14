import './Palette.css'
import React from 'react'
import ColorBox from './ColorBox'
import NavBar from "./NavBar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';

class Palette extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      level: 700,
      format: this.props.formats['hex'],
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeFormat= this.changeFormat.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  static defaultProps = {
    formats: {
      hex: 'hex',
      rgb: 'rgb',
      rgba: 'rgba'
    }
  }
  handleChange (level) {
    this.setState({ level });
  }
  handleClose () {
    this.setState({ open: false })
  }
  changeFormat (e) {
    this.setState({ format: this.props.formats[e.target.value], open: true })
  }
  renderColors () {
    return this.props.colors[this.state.level].map(color => (
      <ColorBox key={color.id} color={color} id={color.id} format={this.state.format} />
    ));
  }

  render () {
    return (
      <div className='container'>
        <div className="Palette">
          <NavBar
            level={this.state.level}
            changeLevel={this.handleChange}
            changeFormat={this.changeFormat}
            format={this.state.format}
          />
          <div className="Palette-colors">{this.renderColors()}</div>
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={
              <span id="message-id">
                Format Changed to {this.state.format}
              </span>
            }
            className="snack-bar"
            action={[
              <Button
                key="undo"
                color="secondary"
                size="small"
                onClick={this.handleClose}
              >
                UNDO
              </Button>,
              <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                className="snack-bar-button"
                onClick={this.handleClose}
              >
                x
              </IconButton>
            ]}
          />
      </div>
    );
  }
}

export default Palette
