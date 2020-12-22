import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './project.css';
import Largebutton from '../../utils/button-large';
import Fade from 'react-reveal/Fade';

import Project1 from '../../assets/proj_complete_1.JPG';
import Project2 from '../../assets/proj_complete_2.JPG';
import Project3 from '../../assets/android_project_3.JPG';
import Project4 from '../../assets/proj_complete_4.JPG';

function Project() {
  return (
    <div id='projects'>
      <Container className='about_project_main'>
        <Fade>
          <h1 className=' h1_for_project' id='projects'>
            My Projects
          </h1>
        </Fade>
        <Row className='about_projects'>
          <Col xs='12' md='6' className='col_projects mb-3 img_flex_center'>
            <img src={Project1} alt='project'></img>
          </Col>
          <Col xs='12' md='6' className='col_projects mb-3'>
            <Fade right>
              <div className='proj_heading_and_link'>
                <h2>Foodilicious </h2>
                <a
                  href='https://whispering-wildwood-64357.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span>
                    <i className='fas fa-external-link-alt link_emoji_small'></i>
                  </span>
                </a>
              </div>
              <p>
                A front end application for searching for food recipes using api
                calls.
                <span role='img' aria-label='food'>
                  😋👨‍🍳
                </span>
                Users can search up their favorite recipe and get variety of
                options with simple and amazing UI.
                <span role='img' aria-label='food'>
                  🥣🍝🍩
                </span>
              </p>
            </Fade>
          </Col>
        </Row>
        <hr></hr>
        <Row className='about_projects'>
          <Col xs='12' md='6' className='col_projects mb-3 order-2 order-md-1'>
            <Fade left>
              <div className='proj_heading_and_link'>
                <h2>Text'em</h2>
                <a
                  href='https://text-em.herokuapp.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span>
                    <i className='fas fa-external-link-alt link_emoji_small'></i>
                  </span>
                </a>
              </div>
              <p>
                A node.js application using web sockets which allows users to
                have real time chat
                <span role='img' aria-label='food'>
                  🗨️
                </span>
                . Users can create a room and have a chat.
                <span role='img' aria-label='food'>
                  🗣️📞
                </span>
              </p>
            </Fade>
          </Col>

          <Col
            xs='12'
            md='6'
            className='col_projects mb-3 rightimg order-1 order-md-2 img_flex_center'
          >
            <img src={Project2} alt='project'></img>
          </Col>
        </Row>
        <hr></hr>

        <Row className='about_projects'>
          <Col
            xs='12'
            md='6'
            className='col_projects phone_img mb-3 img_flex_center'
          >
            <img src={Project3} alt='project'></img>
          </Col>
          <Col xs='12' md='6' className='col_projects mb-3'>
            <Fade right>
              <div className='proj_heading_and_link'>
                <h2>Youtube Clone</h2>
                <a
                  href='https://github.com/sambhav2448/youtube_clone_app'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span>
                    <i className='fas fa-external-link-alt link_emoji_small'></i>
                  </span>
                </a>
              </div>

              <p>
                A youtube clone is an android app made on react-native. Using
                redux for state management. <br></br>Key functionalities of the
                app include :<br></br>
                🔍Search View 🏠 Home Page 🗺️Explore Page 🎥Video Viewing 🖤Dark
                Mode 🔔 Subscription Page<br></br> And most importantly - 🚫 No
                Ads !
              </p>
            </Fade>
          </Col>
        </Row>
        <hr></hr>

        <Row className='about_projects mb-5'>
          <Col xs='12' md='6' className='col_projects mb-3 order-2 order-md-1'>
            <Fade left>
              <div className='proj_heading_and_link'>
                <h2>Take me too</h2>
                <a
                  href='https://takemetoo.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span>
                    <i className='fas fa-external-link-alt link_emoji_small'></i>
                  </span>
                </a>
              </div>
              <p>
                The future will be all about space exploaration.
                <span role='img' aria-label='food'>
                  👨‍🚀👩‍🚀 I made a
                </span>
                hypothetical Space exploration application which guides user
                through different tourist destinations!
                <span role='img' aria-label='food'>
                  👾👾 which was a
                </span>
                hackathon project by mlh.
                <span role='img' aria-label='food'>
                  🌕🛸
                </span>
              </p>
            </Fade>
          </Col>
          <Col
            xs='12'
            md='6'
            className='col_projects mb-3 rightimg order-1 order-md-2 img_flex_center'
          >
            <img src={Project4} alt='project'></img>
          </Col>
        </Row>
      </Container>
      <Fade>
        <div className='moreinfo_project'>
          <a
            href='https://github.com/sambhav2448'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Largebutton>More projects</Largebutton>
          </a>
        </div>
      </Fade>
    </div>
  );
}

export default Project;
