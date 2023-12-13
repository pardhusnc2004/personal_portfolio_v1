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
      <h5 className="text-center mt-5">Global Expertise and Certifications</h5>
      <div className='row d-flex justify-content-center'>
        <div className='row d-flex justify-content-center my-3'>
            <div className='col-md-2'>
                <b>MERN Stack</b>
            </div>
            <div className='col-md-8'>
                <p>"I have a certification in MERN Full Stack Development by Ethnus. During this program, I successfully developed a Movie Ticket Booking System using the MERN stack. This project encompassed the implementation of a secure authentication system, CRUD operations, and responsive design using React.js. Node.js, Express.js, and MongoDB ensured the development of an efficient backend logic, secure data storage, and scalable architecture. This hands-on experience not only enhanced my collaboration skills but also deepened my proficiency in the MERN stack, expanding my knowledge of ES6 and strengthening my problem-solving abilities."</p>
            </div>
        </div>
      </div>
    </div>
  );
};