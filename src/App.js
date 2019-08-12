import './App.css'
import React from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import generatePalette from './colorsHelper'

class App extends React.Component {
  render () {
    console.log('in render')
    return (
      <Palette
        {...generatePalette(seedColors[4])}
      />
    )
  }
}

export default App
