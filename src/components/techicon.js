import React from 'react';
import '../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faJava,
  faHtml5,
  faCss3,
  faBootstrap,
  faJs,
  faNode,
  faReact,
  faGit,
  faGithub,
  faNodeJs,
  faPhp
} from '@fortawesome/free-brands-svg-icons';
import { faC, faCartPlus, faCube, faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons';

class TechIcon extends React.Component {
  render() {
    const { techName } = this.props;
    const iconStyle = {
      fontSize: '3rem',
      color: '#007bff',
    };

    let icon;
    switch (techName.toLowerCase()) {
      case 'python':
        icon = faPython;
        break;
      case 'java':
        icon = faJava;
        break;
      case 'html':
        icon = faHtml5;
        break;
      case 'css':
        icon = faCss3;
        break;
      case 'bootstrap':
        icon = faBootstrap;
        break;
      case 'javascript':
        icon = faJs;
        break;
      case 'nodejs':
        icon = faNodeJs;
        break;
      case 'react':
        icon = faReact;
        break;
      case 'git':
        icon = faGit;
        break;
      case 'github':
        icon = faGithub;
        break;
      case 'sql':
        icon = faDatabase;
        break;
      case 'mongodb':
        icon = faLeaf;
        break;
      case 'c++':
        icon = faC;
        break;
      case 'php':
        icon = faPhp;
        break;
      case 'node':
        icon = faNode;
        break;
    }

    return (
      <div className='icon-container'>
        <div className="icon">
            <FontAwesomeIcon icon={icon} style={iconStyle} />
        </div>
        <h6>{techName}</h6>
      </div>
    );
  }
}

export default TechIcon;
