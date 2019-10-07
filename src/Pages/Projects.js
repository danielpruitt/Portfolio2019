import React from'react';
import {Container, Columns, Col} from '../Components/Grid';
import './css/Landing.css';
import Nav from '../Components/Nav/Nav';
import ProjectList from '../Components/Projects/ProjectList';

const Projects =()=>(
    <Columns
    isGapless={true}
    >
        <Col>
            <Nav/>
        </Col>
        <Col>
            <Container>
                <Columns>
                    <Col>
                        <div className='header-bar'>
                            <div className='header-title has-text-right'>
                                <h2>
                                    Projects
                                </h2>
                            </div>
                        </div>
                    </Col>
                </Columns>
            </Container>
            <Container>
                <Columns>
                    <Col>
                        <ProjectList />
                    </Col>
                </Columns>
            </Container>
        </Col>
    </Columns>
    
);

export default Projects;