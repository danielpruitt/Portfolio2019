import React from 'react';
import { Container, Columns, Col } from '../Grid';
import './ProjectList.css';
const ProjectList = () => (
    <div className='project-list'>
        <Container>
            <Columns>
                <Col>
                    <div className='box'>

                        <div className='media-content'>
                            <div className='content'>
                                <p className='azonix'><strong>Outrun Brewing Co.</strong></p>
                                <p>
                                    This new nano brewery coming to Stone Mountain in 2019. Their website is a simple React front end but is set up for a full MERN stack so the brewers can save their drinks and display as needed.
                                </p>
                                <br/>

                                <a className='link-pad' href="https://github.com/danielpruitt/OutrunBrewingCo" target="_blank" rel="noreferrer noopener"> <span> Github</span></a>
                                <a className='link-pad' href="https://github.com/danielpruitt/Outrun2" target="_blank" rel="noreferrer noopener"> <span> Github Full Stack Project</span></a>

                                <a className='link-pad' href='https://danielpruitt.github.io/OutrunBrewingCo/#/' target='_blank' rel='noreferrer noopener'><span>Outrun</span></a>

                            </div>
                        </div>

                    </div>
                </Col>
                <Col>
                    <div className='box'>

                        <div className='media-content'>
                            <div className='content'>
                                <p className='azonix'><strong>Family Christmas</strong></p>
                                <p>
                                    This is a simple MERN stack application I put together in a couple days so my family could put their list together and everybody could look at it. It's hosted on Heroku and uses a free Mongo database. In the future, this app will have full CRUD abilities as well as utilize the React webhooks.
                                </p>

                                <a className='link-pad' href="https://github.com/danielpruitt/reactChristmas" target="_blank" rel="noreferrer noopener"> <span> Github</span></a>
                                <a className='link-pad' href='https://ourfamilychristmas.herokuapp.com/' target='_blank' rel='noreferrer noopener'><span>Family Christmas</span></a>

                            </div>
                        </div>

                    </div>
                </Col>

            </Columns>
            <Columns>
                <Col>
                    <div className='box'>

                        <div className='media-content'>
                            <div className='content'>
                                <p className='azonix'><strong>Trial of Anima</strong></p>
                                <p>
                                Trial of Anima is a Full Stack MERN application that is a simple came that utilizes React states to manipulate the DOM for gameplay. Mongo and Express are used to store the usernames and how many times the user cleared the game. 
                                </p>
                                
                                <a className='link-pad' href="https://github.com/danielpruitt/TrialOfAnima" target="_blank" rel="noreferrer noopener"> <span> Github</span></a>
                                <a className='link-pad' href='https://trialofanima.herokuapp.com/' target='_blank' rel='noreferrer noopener'><span>Trial of Anima </span></a>

                            </div>
                        </div>

                    </div>
                </Col>
                <Col>
                    <div className='box'>

                        <div className='media-content'>
                            <div className='content'>
                                <p className='azonix'><strong>NYT React</strong></p>
                                <p>
                                The NYT React web app is a Full Stack MERN application that allows the user to search the New York Times Api for articles within a parameter of years and can save articles for later reading 
                                </p>
                                <br/>
                                <a className='link-pad' href="https://github.com/danielpruitt/react-nyt" target="_blank" rel="noreferrer noopener"> <span> Github</span></a>
                                <a className='link-pad' href='https://immense-earth-26245.herokuapp.com/' target='_blank' rel='noreferrer noopener'><span>NYT React </span></a>

                            </div>
                        </div>

                    </div>
                </Col>
            </Columns>
        </Container>
    </div>
);

export default ProjectList;