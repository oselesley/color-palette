import './App.css'
import React from "react";
import Palette from './Palette'
import seedColors from './seedColors'

class App extends React.Component {
  render () {
    return <Palette {...seedColors[7]} />;
  }
}

export default App;
