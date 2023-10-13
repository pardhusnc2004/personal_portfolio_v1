import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCube, faDotCircle, faFontAwesome, faHandPointRight, faSquarePen } from '@fortawesome/free-solid-svg-icons'
import { faAws, faCodepen, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';
const iconstyle = {
    width: "8px"
}
const icon2style = {
    width: "50px",
    height: "50px",
}
export const Expertise = () => {
  return (
    <div id="expertise" className="container" style={{ paddingTop: "50px",paddingBottom: "100px"}}>
      <h5 className="text-center mt-3">Expertise</h5>
      <div className='d-flex justify-content-center'>
        <div className='row'>
            <div className='col-md-3 mt-3'>
                <span className='mx-2'><FontAwesomeIcon style={iconstyle} icon={faCircle}/><b> Problem Solving: </b></span>
            </div>
            <div className='col-md-9 mt-3'>Analyzing complex issues, implementing effective solutions, and optimizing code for better performance.</div>
            <div className='col-md-3 mt-3'>
                <span className='mx-2'><FontAwesomeIcon style={iconstyle} icon={faCircle}/><b> Front-End Development: </b></span>
            </div>
            <div className='col-md-9 mt-3'> Creating engaging and responsive user interfaces using HTML, CSS, and JavaScript, with a focus on modern libraries and frameworks like React.js.</div>
            <div className='col-md-3 mt-3'>
                <span className='mx-2'><FontAwesomeIcon style={iconstyle} icon={faCircle}/><b> Back-End Development: </b></span>
            </div>
            <div className='col-md-9 mt-3'> Building robust server-side applications and APIs using Node.js and Express.</div>
            <div className='col-md-3 mt-3'>
                <span className='mx-2'><FontAwesomeIcon style={iconstyle} icon={faCircle}/><b> Version Control: </b></span>
            </div>
            <div className='col-md-9 mt-3'> Efficiently managing code repositories and collaborative development using Git and GitHub.</div>
        </div>
      </div>
      <h5 className="text-center mt-5">Global Expertise</h5>
      <div className='row d-flex justify-content-center'>
        <div className='row'>
            <div className='col-md-2 d-flex justify-content-center'>
                <a target='_blank' href='https://www.hackerrank.com/pardupolisetty21'><FontAwesomeIcon className='mt-3' style={icon2style} icon={faHackerrank}/></a>
            </div>
            <div className='col-md-10 mt-4'>Participating in coding competitions on platforms like HackerRank to improve problem-solving skills and algorithmic thinking.</div>
        </div>
        <div className='row'>
        <div className='col-md-2 d-flex justify-content-center'>
            <a target='_blank' href='https://github.com/pardhusnc2004'><FontAwesomeIcon className='mt-3' style={icon2style} icon={faGithub}/></a>
        </div>
        <div className='col-md-10 mt-3'>Consistently contributing to open-source projects on GitHub and actively participating in the developer community to collaborate, share knowledge, and improve coding skills.</div>
        </div>
        <div className='row'>
            <div className='col-md-2 d-flex justify-content-center'>
                <a target='_blank' href='https://codesandbox.io/u/LightningMcQueen95'><FontAwesomeIcon className='mt-3' style={icon2style} icon={faCube}/></a>
            </div>
            <div className='col-md-10 mt-3'>Getting started with CodeSandbox for web development projects, making it easy to experiment with code and learn web technologies.</div>
        </div>
        <div className='row'>
            <div className='col-md-2 d-flex justify-content-center'>
                <a target='_blank' href='https://codepen.io/pardhu-polisetty'><FontAwesomeIcon className='mt-3' style={icon2style} icon={faCodepen}/></a>
            </div>
            <div className='col-md-10 mt-3'>Showcasing front-end development skills by creating interactive and visually appealing web projects on CodePen, with a focus on HTML, CSS, and JavaScript.</div>
        </div>
      </div>
    </div>
  );
};