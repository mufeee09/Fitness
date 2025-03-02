import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageGrid from './Imggrid';

const About =()=>{
    return(
        <>
        <Navbar></Navbar>
    
        <div className='container' id="cont">
            <h1 className='at'  >About Us</h1>
            <h1 className='abt'>About Us</h1>
            <p className='pa'>Transforming Men. Boosting Testosterone. Burning Fat.
            </p>
            <p className='para'>Welcome to TestMax, the ultimate online fitness coaching program designed 
                exclusively for men who are ready to take charge of their bodies and hormones. At TestMax,
                 we believe that fitness is more than just workouts and diets—it’s about building discipline, 
                 boosting testosterone, and staying accountable.
            </p>
        </div>
        <ImageGrid></ImageGrid>
        <Footer></Footer></>
    );
}
export default About;