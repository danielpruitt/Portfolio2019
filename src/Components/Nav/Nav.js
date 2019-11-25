import React from 'react';
import { Col, Columns, Container } from '../Grid'
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => (
    <div>
        <div id='sideNav'>
            <Container>
                <Columns>
                    <Col>
                        <p className='extralarge azonix'>Daniel Pruitt </p>
                        <br />
                        <p className='large azonix'>Full Stack Developer</p>
                    </Col>
                </Columns>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <Container>
                <Columns>
                    <Col>

                        <ul>
                            <Link to='/'>
                                <div className='nav-link'>
                                    <h5>About Me</h5>
                                </div>
                            </Link>
                            <Link to='/Projects'>
                                <li className='nav-link'>
                                    <h5>Projects</h5>
                                </li>
                            </Link>

                            <Link to='/Skills'>
                                <li className='nav-link'>
                                    <h5>Skills</h5>
                                </li>
                            </Link>
                    
                        </ul>
                    </Col>

                </Columns>
            </Container>

            <br />
            <br />

            <Container>
                <Columns>
                    <Col>
                        <a href="https://www.linkedin.com/in/daniel-pruitt/" target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-linkedin fa-5x" />
                        </a>

                    </Col>
                    <Col>
                        <a href="https://github.com/danielpruitt/" target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-github fa-5x"></i></a>

                    </Col>
                </Columns>
                <Columns>
                    <Col>
                    <div className='azonix'>
                    <a href='https://drive.google.com/file/d/1UEoC_hMBUPeX_kyL-61olD4Q9WdKMpDL/view?usp=sharing' target='_blank' rel='noreferrer noopener'><span>Resume</span></a>
                    </div>
                    </Col>
                </Columns>
            </Container>
        </div>
        <div id='simpleNav'>
            <div className='simple-nav'>
                <Container>
                    <Columns
                    isGapless = {true}>
                        <Col>
                            <p className='azonix large'>Daniel Pruitt</p>

                        </Col>
                        <Col>

                        <Link to='/'>
                                <div className='nav-link'>
                                    <h5>About Me</h5>
                                </div>

                        </Link>  
                        </Col>

                        <Col>
                            <Link to='/Projects'>
                                <div className='nav-link'>
                                    <h5>Projects</h5>
                                </div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/Skills'>
                                <div className='nav-link'>
                                    <h5>Skills</h5>
                                </div>
                            </Link>
                        </Col>
                        <Col>
                        <div className=' nav-link'>
                        <a href='https://drive.google.com/file/d/1-eNlrlxFknK-IVPGJg78qctT8iPomTor/view?usp=sharing' target='_blank' rel='noreferrer noopener'><span>Resume</span></a>
                        </div>
                    </Col>
                    </Columns>
            </Container>
            </div>
        </div>
    </div>

);

export default Nav;