import React from 'react';
import {Container, Columns, Col} from '../Grid';
import './AboutMe.css';

const AboutMe =()=>(
    <div className='about-me'>
        <Container>
            <Columns>
                <Col>
                    I'm full stack web developer and perpetual learner. I originally recieved a Bachelor Degree of Arts in Foreign Language and I have considered myself adept at learning languages, whether it is spoken or computer language. The track to be a Spanish teacher was halted when I started building websites and had the desire to learn to code. Since then I have been teaching myself code prior to attending class and receiveing a certificate from the Georgia Institute of Technology. When at Georgia Tech I learned the basic technologies, HTML, CSS, Javascript, and other more powerful technologies. Such technologies include the jQuery, Handlebars, mySQL and Sequelize, MongoDB, Express, React, and Node. Teamwork and collaboration have been a consistent and necessary action to execute the goal of any team I have been on. The world of coding and web development has opened my mind to explore the extensive use of this technology to bring the ultimate experience to the user.
                </Col>
            </Columns>
            <Columns>
                <Col>
                    <p>Since leaving the bootcamp I have been working as a .NET developer in which I have had to learn C# on the job as well as work on my SQL skills. Since working in the .NET framework I have learned to utilize the Entity Framework, employee business rules and data access to projects and even developing a web service and an API. I have also coordinated the development of a custom version of our software that incorporates  the API as well as a custom database. </p>
                    <br/>
                    <p>
                        In my free time I still love to code. I have been developing the website for a nano brewery which is set to open in winter of 2019. I created a front end version in React but also created a MERN Stack application which will allow the brewers to upload their beers and store them using Mongo.The front end version of this website is on the Projects page and both projects are on my Github. 
                        I also have been working on a .NET Application which is meant to store my commonly used recipes that I make or find online. The project is using the Entity Framework as well as a SQL database that's in AWS. I am always looking for new ways to take what I have learned in the bootcamp and at work to become a better developer. 
                    </p>
                </Col>
                
            </Columns>
        
        </Container>
    </div>

);

export default AboutMe;