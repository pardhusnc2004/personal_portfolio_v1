import '../styles/home.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
export function About() {
    return (
        <div id="about" className="container"  style={{paddingTop: "50px",paddingBottom: "100px"}}>
            <h5 className='text-center mt-3'>Brief Intro</h5>
            <div className=' text-center d-flex justify-content-center'>
                <p className='col-md-6'>I am an aspiring software engineer currently pursuing my undergraduate degree, and I am actively seeking an internship to gain hands-on experience and further develop my skills in the field of software development.<span className='blinking'>|</span></p>
            </div>
            <h5 className='text-center mt-3'>Skills and Goals</h5>
            <div className=' text-center d-flex justify-content-center'>
                <p className='col-md-6'>With a strong foundation in programming languages and technologies such as JavaScript, Python, and React.js, I am eager to apply my knowledge in a real-world setting. My goal is to contribute to a dynamic team, learn from experienced professionals, and make a positive impact on challenging projects..<span className='blinking'>|</span></p>
            </div>
            <div className='d-flex justify-content-center'> <Link to="/skills" className='btn mx-3 btn-light'>Explore Skill Set</Link></div>
            <h5 className='text-center mt-5'>Education</h5>
            <div className='row d-flex flex-wrap justify-content-center align-items-center mb-2'>
                <div className="row my-3 col-md-3 mx-1">
                    <div className='edu-card'>
                        <h5>UG</h5>
                        <h6 className='text-center'>VIT-AP University</h6>
                        <div>2021 - present</div>
                        <div>CGPA: 9.25</div>
                    </div>
                </div>
                <div className="row my-3  col-md-3 mx-1">
                    <div className='edu-card'>
                        <h5>Intermediate</h5>
                        <h6 className='text-center'>Narayana Educationl Institutions</h6>
                        <div>2019 - 2021</div>
                        <div>96.7%</div>
                    </div>
                </div>
                <div className="row my-3  col-md-3 mx-1">
                    <div className='edu-card'>
                        <h5>10th Standard</h5>
                        <h6 className='text-center'>St. John's Secondary School</h6>
                        <div>2014 - 2019</div>
                        <div>92.2%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}