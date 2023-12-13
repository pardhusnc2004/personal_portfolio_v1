import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faHackerrank
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
const iconStyle = {
    fontSize: '1rem',
    color: '#007bff',
    marginLeft: '10px'
  };
export class Footer extends Component {
    
    render() {
        return (
            <footer class="footer fixed-bottom text-center mt-5">
            <div class="container">
                <p>&copy; Pardhasaradhi Polisetty 2023 <span style={{right:'0'}}>
                <a target="blank" href="https://github.com/pardhusnc2004"><FontAwesomeIcon icon={faGithub} style={iconStyle} /></a>
                <a target="blank" href="www.linkedin.com/in/pardhasaradhi-polisetty"><FontAwesomeIcon icon={faLinkedin} style={iconStyle} /></a>
                <a target="blank" href="https://leetcode.com/Lightning_Mc_Queen/"><FontAwesomeIcon icon={faCode} style={iconStyle} /></a>
                <a target="blank" href="https://www.hackerrank.com/profile/pardupolisetty21"><FontAwesomeIcon icon={faHackerrank} style={iconStyle} /></a></span></p>
            </div>
        </footer>
        )
    }
}