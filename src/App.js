import './App.css'
import React from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import generatePalette from './colorsHelper'


class App extends React.Component {
  render () {
    console.log('in render')
    return (
      <div>
        <Palette
          {...generatePalette(seedColors[4])}
        />
      </div>
    )
  }
}

export default App
