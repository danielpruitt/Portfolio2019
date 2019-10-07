import React from 'react';
import { Container, Columns, Col } from '../Components/Grid';
import './css/Landing.css';
import Nav from '../Components/Nav/Nav';
import AboutMe from '../Components/Me/AboutMe';

const Landing = () => (
    <div>


        <Columns
            isGapless={true}
        >
            <Col>
                <Nav />
            </Col>
            <Col>
                <Container>
                    <Columns>
                        <Col>
                            <div className='header-bar'>
                                <div className='header-title has-text-right'>
                                    <h2>
                                        About Me
                                </h2>
                                </div>
                            </div>
                        </Col>
                    </Columns>
                </Container>
                <Container>
                    <Columns>
                        <Col>
                            <AboutMe/>
                        </Col>
                    </Columns>
                </Container>
            </Col>

        </Columns>
    </div>
);

export default Landing;