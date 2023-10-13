import React, { Component } from "react";
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const iconStyle = {
  color: 'white',
  position: 'fixed',
  right: '10px',
  top: '20px',
};

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isToggled: false,
    };
  }

  handleTogglerClick = () => {
    this.setState((prevState) => ({
      isToggled: !prevState.isToggled,
    }));
  };

  handleOptionClick = () => {
    this.setState({
      isToggled: false, // Close the Navbar when an option is clicked
    });
  };

  render() {
    const { isToggled } = this.state;

    return (
      <nav className={`navbar navbar-expand-lg fixed-top ${isToggled ? 'navbar-responsive' : null}`}>
        <div className="container">
          <a className="navbar-brand" style={{ color: "#ccd6f6", width: "100%" }}>{'<' + 'pardhu' + ' />'}<span className="blinking"> |</span></a>
          <button className="navbar-toggler" onClick={this.handleTogglerClick} style={{ position: 'absolute', right: '0', width: "20px"}}>
            <FontAwesomeIcon icon={faBars} style={iconStyle} />
          </button>
          <div className={`collapse navbar-collapse ${isToggled ? 'show' : ''}`} id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#ccd6f6" }} to="/" onClick={this.handleOptionClick}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#ccd6f6" }} to="/about" onClick={this.handleOptionClick}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#ccd6f6" }} to="/skills" onClick={this.handleOptionClick}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#ccd6f6" }} to="/expertise" onClick={this.handleOptionClick}>Expertise</Link>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-light" href="mailto:pardhasaradhi.polisetty@outlook.com" onClick={this.handleOptionClick}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
