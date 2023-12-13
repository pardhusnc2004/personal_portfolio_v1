import '../styles/home.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
export function Projects() {
    return (
        <div id="about" className="container"  style={{paddingTop: "50px",paddingBottom: "100px"}}>
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