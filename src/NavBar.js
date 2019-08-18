import "rc-slider/assets/index.css";
import './NavBar.css'
import React from 'react'
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "rc-slider";
import Select from '@material-ui/core/Select';
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
    const { format, changeFormat } = this.props
    return (
      <div className="NavBar">
        <NavLink to='/' activeClassName="logo">reactColorPicker</NavLink>
        {this.props.type !== 'singlePalette' && <div className="slider">
          <label>Level: {this.props.level} </label>
          <Slider
            defaultValue={this.props.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.props.changeLevel}
          />
        </div>}
        <div className="select">
          <Select
            value={format}
            onChange={changeFormat}
          >
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 0.3)</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
}

export default NavBar