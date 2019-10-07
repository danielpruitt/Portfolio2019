import React from 'react';
import { Container, Columns, Col } from '../Grid';
import './List.css';

const SkillList = () => (
    <div className='skill-list'>
        <Container>
            <Columns>
                <Col>
                    <h4>Languages</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>C#</li>
                        <li>SQL</li>
                    </ul>
                </Col>
                <Col>
                    <h4>Front End</h4>
                    <ul>
                        <li>React</li>
                        <li>jQuery</li>
                        <li>Razor</li>
                        <li>LESS</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                        <li>Bulma</li>
                    </ul>

                </Col>
                <Col>

                    <h4>Back End</h4>
                    <ul>
                        <li>Relation Database</li>
                        <li>Nonrelational Database</li>
                        <li>MongoDB</li>
                        <li>T-Sql</li>
                        <li>Stored Procedures</li>
                    </ul>

                </Col>
            </Columns>
            <Columns>
                <Col>
                    <h4>Technical</h4>
                    <ul>
                        <li>Entity Framework</li>
                        <li>C# Web Services and API</li>
                        <li>XML</li>
                        <li>JSON</li>
                        <li>AJAX</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>NPM</li>
                        <li>Yarn</li>
                        <li>Nuget</li>
                    </ul>

                </Col>
                <Col>
                    <h4>Other</h4>
                    <ul>
                        <li>Amazon Web Services</li>
                        <li>Microsoft SQL Server</li>
                        <li>Azure</li>
                        <li>Heroku</li>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Scrum</li>
                        <li>Agile</li>
                    </ul>


                </Col>
            </Columns>
        </Container>
    </div>

);

export default SkillList;