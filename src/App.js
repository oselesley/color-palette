import './App.css'
import React from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import generatePalette from './colorsHelper'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PaletteList from './PaletteList'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.palette = seedColors.map(color => generatePalette(color))
  }
  render () {
    console.log('in render')
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={routeProps => <PaletteList {...routeProps} />}
            />
            <Route
              path="/palette/:id"
              exact
              render={routeProps => (
                <Palette
                  {...routeProps}
                  {...this.palette.find(
                    palette => palette.id === routeProps.match.params.id
                  )}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
