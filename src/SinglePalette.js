import React from 'react'
import { withStyles } from '@material-ui/styles'
import ColorBox from './ColorBox'
import Navbar from './NavBar'
import Footer from './Footer'
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


const styles = {
  root: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden'
  },
  colors: {
    height: '86%',
    width: '100%'
  }
}

class SinglePalette extends React.Component {
  constructor (props) {
    super(props)
    this.singlePalette = this.gatherColors()
    this.state = { format: 'hex', close: false }
    this.changeFormat = this.changeFormat.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  gatherColors () {
    console.log(this.props.colors[100])
    const singlePalette = []
    for (let i = 100; i <= 900; i += 100) {
      this.props.colors[i].map(color => {
        if (color.name.split(' ')[0] === this.props.match.params.id) {
          singlePalette.push(color)
        }
      })
    }
    return singlePalette
  }
  changeFormat (e) {
    console.log('in change format', e.target.value)
    this.setState({ format: e.target.value, close: true })
  }
  handleClose () {
    this.setState({ close: !this.state.close })
  }
  renderColors () {
    return this.singlePalette.map(color => (
      <ColorBox
        key={color.name}
        colorName={color.name}
        id={color.id}
        type={'singlePalette'}
        color={color[this.state.format]}
        paletteID={this.props.id}
      />
    ))
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Navbar
          format={this.state.format}
          changeFormat={this.changeFormat}
          type='singlePalette'
        />
        <div className={classes.colors}>
          {this.renderColors()}
          <ColorBox
            key={'black'}
            colorName={''}
            id={'return'}
            type={'singlePalette'}
            color={'#000'}
            paletteID={this.props.id}
          />
        </div>
        <Footer paletteName={this.props.paletteName} emoji={this.props.emoji} />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.close}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id='message-id'>Format Changed to {this.state.format}!</span>}
          action={[
            <IconButton
              key='close'
              aria-label='close'
              color='inherit'
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    )
  }
}

export default withStyles(styles)(SinglePalette)
