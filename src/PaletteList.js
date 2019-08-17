import './PaletteList.css'
import React from 'react'
import MiniPalette from './MiniPalette'
import seedColors from './seedColors'
import uuidv4 from 'uuid/v4'

class PaletteList extends React.Component {
  renderSeedColors () {
    return seedColors.map(palette => (
      <div className="Palette-item" key={uuidv4()} >
        <MiniPalette palette={palette} history={this.props.history} />
      </div>
    ));
  }
  render () {
    return (
      <div className='PaletteList'>
        <div className='PaletteList-container'>
          {this.renderSeedColors()}
        </div>
      </div>
    )
  }
}

export default PaletteList
