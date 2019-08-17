// import './MiniPalette.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    backgroundColor: '#fff',
    padding: '0.3rem',
    paddingBottom: '0',
    borderRadius: '5px',
    cursor: 'pointer',
    overflow: 'hidden'
  },
  data: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 0.2rem',
    '& span': {
      // alignSelf: 'flex-start',
      fontSize: '0.9rem'
    },
    '& h3': {
      /* color: #f4f4f4 */
      fontSize: '0.7rem',
      fontFamily: 'Quattrocento Sans, sans-serif',
      letterSpacing: '1px',
      alignSelf: 'flex-end',
      margin: '0 !important',
      padding: '0.5rem 0'
    }
  },
  colors: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  colorbox: {
    height: '20%',
    width: '25%'
  }
}

class MiniPalette extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  renderColors () {
    return this.props.palette.colors.map(color => <div className={this.props.classes.colorbox} style={{ backgroundColor: color.color }} id={`color.name-${this.props.id}`} key={color.color}>&nbsp;</div>)
  }
  handleClick () {
    console.log(this.props)
    this.props.history.push(`/palette/${this.props.palette.id}`)
  }
  render () {
    const { classes, palette } = this.props
    return (
      <div className={classes.root} onClick={this.handleClick}>
        <div className={classes.colors}>{this.renderColors()}</div>
        <div className={classes.data}>
          <h3>{palette.paletteName}</h3>
          <span>{palette.emoji}</span>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MiniPalette)
