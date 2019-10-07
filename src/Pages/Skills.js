import React from'react';
import {Container, Columns, Col} from '../Components/Grid';
import './css/Landing.css';
import Nav from '../Components/Nav/Nav';
import SkillList from '../Components/List/List';

const Skills =()=>(
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
                                    Skills
                                </h2>
                            </div>
                        </div>
                    </Col>
                </Columns>
            </Container>
            <Container>
                <Columns>
                    <Col 
                        isGapless={true}
                    >
                        <SkillList/>
                    </Col>
                </Columns>
            </Container>
        </Col>
    </Columns>
    
);

export default Skills;