import React from 'react';

 export const Hero = (props) => (
    <section className='hero is-dark'>
        <div className='hero-body'>
            <div className='container'>
                <h2 className='title azonix'>
                    {props.Title}
                </h2>
                <h3 className='subtitle'> 
                    {props.Subtitle}
                </h3>
            </div>
        </div>

    </section>

);
export default Hero;