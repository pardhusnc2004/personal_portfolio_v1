import '../styles/home.css'
import mainimg from './IMG_9681.JPG'
import { Link } from 'react-router-dom'
export function Info() {
    return (
        <div className="container centered-container" style={{paddingTop: "320px", paddingBottom: "110px"}}>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-7 col-12">
                    <div>Hello! My name is</div>
                    <div style={{fontWeight: "600px", fontSize: "40px"}}>Pardhasaradhi Polisetty</div>
                    <div style={{color: "#ccd6f6"}}>I am an aspiring software engineer currently pursuing my undergraduate degree. With a strong skill set and a passion for technology, I am dedicated to advancing my career in software development.<span class="blinking">|</span></div>
                    <div className='col-md-7 d-flex align-items-center justify-content-center'><Link className='btn btn-light mt-4' to="/about">Checkout More</Link><a href='mailto:pardhasaradhi.polisetty@outlook.com' target='_blank'> <div className='btn btn-outline-light mt-4 ms-4'>Hire Me</div></a></div>
                </div>
                <div className="d-flex col-md-5 col-12 mt-3"  style={{paddingBottom: "60px"}}>
                    <div className='image-holder'>
                        <img src={mainimg} class="img-fluid mx-auto"/>
                    </div>
                </div>
            </div>
        </div>
    )
}