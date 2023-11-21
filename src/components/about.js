import '../styles/home.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
export function About() {
    return (
        <div id="about" className="container"  style={{paddingTop: "50px",paddingBottom: "100px"}}>
            <h5 className='text-center mt-3'>Brief Intro</h5>
            <div className=' text-center d-flex justify-content-center'>
                <p className='col-md-6'>I am an aspiring software engineer currently pursuing my undergraduate degree, and I am actively seeking an internship to gain hands-on experience and further develop my skills in the field of software developmen.<span className='blinking'>|</span></p>
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
                        <h6 className='text-center'>VIT-AP University</h6>
                        <div>2021 - present</div>
                        <div>CGPA: 9.25</div>
                    </div>
                </div>
                <div className="row my-3  col-md-3 mx-1">
                    <div className='edu-card'>
                        <h6 className='text-center'>Narayana Educationl Institutions</h6>
                        <div>2019 - 2021</div>
                        <div>Percentage: 96.7</div>
                    </div>
                </div>
                <div className="row my-3  col-md-3 mx-1">
                    <div className='edu-card'>
                        <h6 className='text-center'>St. John's Secondary School</h6>
                        <div>2014 - 2019</div>
                        <div>Percentage: 92.2 [C.B.S.E]</div>
                    </div>
                </div>
            </div>
            <h5 className='text-center mt-4'>Academic Projects</h5>
            <div className='row mt-3'>
                <div className='col-md-6'>
                    <p><span className='mx-2'><FontAwesomeIcon icon={faHandPointRight}/></span>Built a machine learning prototype using Python, NumPy and Pandas that predicts winner in a UFC fight.<span className='blinking'>|</span></p>
                    <p><span className='mx-2'><FontAwesomeIcon icon={faHandPointRight}/></span>Built a Calculator using HTML5, CSS3, JavaScript and React.js.<span className='blinking'>|</span></p>
                </div>
                <div className='col-md-6'>
                    <p><span className='mx-2'><FontAwesomeIcon icon={faHandPointRight}/></span>Built a deep learning prototype using Python and TensorFlow that recognizes a gesture made by user’s and translates that into word format.<span className='blinking'>|</span></p>
                    <p><span className='mx-2'><FontAwesomeIcon icon={faHandPointRight}/></span>Built a medical website prototype using HTML5, CSS3, JavaScript and PHP.<span className='blinking'>|</span></p>
                </div>
            </div>
            <div className='d-flex justify-content-center'><Link to="/expertise" className='btn mx-3 btn-outline-light'>My Expertise</Link></div>
        </div>
    )
}