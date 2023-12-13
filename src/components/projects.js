import '../styles/home.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
export function Projects() {
    return (
        <div id="about" className="container"  style={{paddingTop: "55px",paddingBottom: "100px"}}>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-8'>
                    <div className='proj justify-content-center my-3'>
                        <h6>1. Personal Portfolio [Sep 2023 - Oct 2023]</h6>
                        <ul>
                            <li>Designed and developed a personal portfolio website to showcase my skills, experiences, and projects.</li>
                            <li>Created a dynamic and responsive user-interface using React’s components architecture.</li>
                            <li>React Router was utilized to enable smooth transitions between portfolio sections, enhancing overall user navigation.</li>
                        </ul>
                        <span className='d-flex flex-wrap mt-2'>Skills acquired: <span style={{backgroundColor:"red"}} className='skill-card'>Showcasing projects</span> <span style={{backgroundColor:"red"}} className='skill-card'>Problem solving</span> <span style={{backgroundColor:"red"}} className='skill-card'>Version control</span> <span style={{backgroundColor:"red"}} className='skill-card'>Deoloyment</span></span>
                        <p className='d-flex flex-wrap mt-2'>Technologies used: <span className='skill-card'>React</span> <span className='skill-card'>Bootstrap</span></p>
                        <div className='d-flex justify-content-evenly'><a target='blank' href='https://github.com/pardhusnc2004/personal_portfolio_v1'>GitHub Repo</a><a target='blank' href='https://personal-portfolio-v1-sigma.vercel.app/'>Live Link</a></div>
                    </div>
                </div>
                <div className='col-md-8'>
                <div className='proj justify-content-center my-3'>
                    <h6>2. Movie Ticket Booking System [Aug 2023 - Nov 2023]</h6>
                    <ul>
                        <li>Developed a user-friendly Movie Ticket Booking System using MERN Stack.</li>
                        <li>Integrated a secure authentication system for user registration and login along with CRUD operations, booking movie tickets, etc.</li>
                        <li>Utilized React.js in the front-end to make website responsive and enhance user experience.</li>
                        <li>Integrated the backend logic using Node.js and Express.js to handle async events and communicate with Mongo DB.</li>
                        <li>Employed MongoDB for efficient data storage and retrieval, ensuring the scalability of the applications.</li>
                    </ul>
                    <span className='d-flex flex-wrap mt-2'>Skills acquired: <span style={{backgroundColor:"red"}} className='skill-card'>Effective collaboration</span> <span style={{backgroundColor:"red"}} className='skill-card'>MERN stack proficiency</span> <span style={{backgroundColor:"red"}} className='skill-card'>ES6</span> <span style={{backgroundColor:"red"}} className='skill-card'>Problem Solving</span></span>
                    <p className='d-flex flex-wrap mt-2'>Technologies used: <span className='skill-card'>React</span> <span className='skill-card'>Node.js</span> <span className='skill-card'>Express.js</span> <span className='skill-card'>Mongo DB</span> <span className='skill-card'>Bootstrap</span></p>
                    <div className='d-flex justify-content-evenly'><a target='blank' href='https://github.com/pardhusnc2004/ShowTimeSquad-frontend'>GitHub Repo</a><a target='blank' href='https://show-time-squad-frontend.vercel.app/'>Live Link</a></div>
                </div>
                </div>
                <div className='col-md-8'>
                <div className='proj justify-content-center my-3'>
                    <h6>3. UFC Fight Winner Predictor [Mar 2023 - Apr 2023]</h6>
                    <ul>
                        <li>Developed a UFC Fight Winner Predictor using machine learning to analyze historical fight data and predict potential outcomes.</li>
                        <li>Collected and processed comprehensive data on past UFC fights, including fighter statistics, fight location, and outcomes.</li>
                        <li>Utilized machine learning algorithms, such as Logistic regression, Random Forest, etc., for predicting winner of a fight under specific cirsumstances.</li>
                        <li>Implemented a testing framework to assess the model's accuracy.</li>
                    </ul>
                    <span className='d-flex flex-wrap mt-2'>Skills acquired: <span style={{backgroundColor:"red"}} className='skill-card'>Critical thinking</span> <span style={{backgroundColor:"red"}} className='skill-card'>Team Work</span> <span style={{backgroundColor:"red"}} className='skill-card'>Debugging</span> <span style={{backgroundColor:"red"}} className='skill-card'>Project management</span></span>
                    <p className='d-flex flex-wrap mt-2'>Technologies used: <span className='skill-card'>Pyhon</span> <span className='skill-card'>Scikit-Learn</span> <span className='skill-card'>Jupyter Notebooks</span></p>
                </div>
                </div>
                <div className='col-md-8'>
                <div className='proj justify-content-center my-3'>
                    <h6>4. IOT based Health Monitoring System [Jan 2023 - May 2023]</h6>
                    <ul>
                        <li>Developing an IoT-based Health Monitoring System using NodeMCU involves integrating hardware and software components to collect and transmit heatlth-related data.</li>
                        <li>Employed sensors such as MAX30100 pulse oximeter, DHT22 temperature and humidity sensors and etc., to collect real-time health data.</li>
                        <li>Established connectivity using Wi-Fi to transmit health data to a cloud server [Blynk app].</li>
                        <li>Implemented statistics to visualize latest health data trends.</li>
                    </ul>
                    <span className='d-flex flex-wrap mt-2'>Skills acquired: <span style={{backgroundColor:"red"}} className='skill-card'>IOT connectivity</span> <span style={{backgroundColor:"red"}} className='skill-card'>Effective collaboration</span> <span style={{backgroundColor:"red"}} className='skill-card'>Cloud integration</span></span>
                    <p className='d-flex flex-wrap mt-2'>Technologies used: <span className='skill-card'>Node MCU</span> <span className='skill-card'>Arduino IDE</span></p>
                </div>
                </div>
                <div className='col-md-8'>
                <div className='proj justify-content-center my-3'>
                    <h6>5. Sign Language Interpreter [May 2023 - Aug 2023]</h6>
                    <ul>
                        <li>Developed a real-time sign language interpretation system that provides instantaneous translation of sign language into text.</li>
                        <li>Utilized CNN and transfer learning techniques to accurately interpret the movements and positions of hands and fingers to understand sign language.</li>
                        <li>Incorporated machine learning algorithms that allow the system to continuously improves its accuracy over time.</li>
                    </ul>
                    <span className='d-flex flex-wrap mt-2'>Skills acquired: <span style={{backgroundColor:"red"}} className='skill-card'>Showcasing projects</span> <span style={{backgroundColor:"red"}} className='skill-card'>Problem solving</span> <span style={{backgroundColor:"red"}} className='skill-card'>Team work</span> </span>
                    <p className='d-flex flex-wrap mt-2'>Technologies used: <span className='skill-card'>Python</span> <span className='skill-card'>Collab</span> <span className='skill-card'>Deep Learning</span> <span className='skill-card'>CNN</span></p>
                    <div className='d-flex justify-content-evenly'><a target='blank' href='https://github.com/Konathalavenkat/Sign-Language-interpreter'>GitHub Repo</a></div>
                </div>
                </div>
                <div className='col-md-8'>
                <div className='proj justify-content-center my-3'>
                    <h6>6. Hospital Management System [May 2023 - Aug 2023]</h6>
                    <ul>
                        <li>Developed a prototype for hospital management system using HTML 5, CSS 3, JavaScript and PHP.</li>
                        <li>Integrated user authentication using PHP cookies and used PHP for server-side scripting.</li>
                        <li>Instigated a system for patients to schedule appointments with specific doctors or departments.</li>
                    </ul>
                    <span className='d-flex flex-wrap mt-2'>Skills acquired: <span style={{backgroundColor:"red"}} className='skill-card'>Dynamic web interaction</span> <span style={{backgroundColor:"red"}} className='skill-card'>Database integration</span> <span style={{backgroundColor:"red"}} className='skill-card'>Efficient data management</span></span>
                    <p className='d-flex flex-wrap mt-2'>Technologies used: <span className='skill-card'>HTML</span> <span className='skill-card'>CSS</span> <span className='skill-card'>PHP</span></p>
                    <div className='d-flex justify-content-evenly'><a target='blank' href='https://github.com/pardhusnc2004/TeleHealthEase'>GitHub Repo</a><a target='blank' href='https://pardhusnc2004.github.io/TeleHealthEase/'>Live Link</a></div>
                </div>
                </div>
                <div className='col-md-8'>
                <div className='proj justify-content-center my-3'>
                    <h6>7. Smart Parking System using Object Recognition [May 2023 - Aug 2023]</h6>
                    <ul>
                        <li>Developed a prototype for Smart parking system using Arduino UNO, ESP-32 Cam. module and CNN.</li>
                        <li>Employed CNN to detect and identify vehicles within the parking area.</li>
                        <li>Implemented a real-time monitoring system that analyzes camera feeds to determine the availability of parking spaces, providing users with accurate information on occupied and vacant spots.</li>
                    </ul>
                    <span className='d-flex flex-wrap mt-2'>Skills acquired: <span style={{backgroundColor:"red"}} className='skill-card'>Effective collaboration</span> <span style={{backgroundColor:"red"}} className='skill-card'>Presentation</span> <span style={{backgroundColor:"red"}} className='skill-card'>Real-Time monitoring</span></span>
                    <p className='d-flex flex-wrap mt-2'>Technologies used: <span className='skill-card'>Arduino UNO</span> <span className='skill-card'>CNN</span><span className='skill-card'>ESP-32 Cam. module</span></p>
                </div>
                </div>
            </div>
        </div>
    )
}