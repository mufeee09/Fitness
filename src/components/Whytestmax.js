import React from 'react';
import './Whytestmax.css';
import Navbar from './Navbar';

const Whytestmax = () => {
    return(
        <>
        <Navbar></Navbar>
        <div className='contner' id="cot">
            <h1 className='about'>Why TestMax?</h1><br></br>
            <h1 className='abot'>Why TestMax?</h1>
            <p className='p'>Customized Diet Plans: Tailored nutrition strategies that fuel fat loss and support hormone health.
            Personalized Workout Programs: Fitness routines designed to build lean muscle, burn fat, and naturally boost testosterone.
            Motivation & Accountability: We understand that staying on track requires more than just a plan. That’s why we provide the guidance, 
            motivation, and accountability you need to achieve lasting results<br></br></p>
            {/* <p className='para'></p> */}
            {/* <p className='para'></p> */}

        </div>
        </>
    );
}
export default Whytestmax;