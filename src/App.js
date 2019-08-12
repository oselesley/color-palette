import './App.css'
import React from "react";
import Palette from './Palette'
import seedColors from './seedColors'
import generatePalette from './colorsHelper'

class App extends React.Component {
  render () {
    console.log(generatePalette(seedColors[4]))
    return <Palette {...seedColors[7]} />;
  }
}

export default App;
