// import './PaletteList.css'
import React from 'react'
import MiniPalette from './MiniPalette'
import seedColors from './seedColors'
import { Link } from 'react-router-dom'
import uuidv4 from 'uuid/v4'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    margin: '0 auto',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#3f3abf'
  },
  container: {
    width: '70%',
    height: '50%',
    margin: 'auto auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '1rem'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    margin: 'auto',
    '& a': {
      alignSelf: 'center',
      color: '#fff'
    },
    '& h2': {
      color: '#fff',
      fontFamily: 'Quattrocento Sans, sans-serif',
      letterSpacing: '2px',
      cursor: 'pointer'
    }
  }
}

class PaletteList extends React.Component {
  renderSeedColors () {
    const { classes } = this.props;
    return seedColors.map(palette => (
      <div className={classes.item} key={uuidv4()} >
        <MiniPalette palette={palette} history={this.props.history} />
      </div>
    ));
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.navbar}>
          <h2>React Colors</h2>
          <Link to='/'>Create Palette</Link>
        </div>
        <div className={classes.container}>
          {this.renderSeedColors()}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
