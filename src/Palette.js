import "rc-slider/assets/index.css";
import './Palette.css'
import React from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import NavBar from "./NavBar";

class Palette extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      level: 700
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (level) {
    this.setState({ level });
  }
  renderColors () {
    return this.props.colors[this.state.level].map(color => (
      <ColorBox key={color.id} color={color} id={color.id} />
    ));
  }

  render () {
    return (
      <div className="Palette">
        <NavBar>
          <div className="slider">
            <label>Level: {this.state.level} </label>
            <Slider
              defaultValue={this.state.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.handleChange}
            />
          </div>
        </NavBar>
        <div className="Palette-colors">{this.renderColors()}</div>
      </div>
    );
  }
}

export default Palette
