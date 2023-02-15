import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './intro.css';
import Typewritter from '../../utils/typewritter';
import Button from '../../utils/button-animated';
// import Sampic1 from "../../assets/sambhavpic1.jpeg";
import Sampic2 from '../../assets/sambhav_mihir_edit.jpg';
// import Fade from "react-reveal/Fade";

function Intro() {
  return (
    <div className='intro_landing' id='intro'>
      <Container>
        <Row>
          <Col xs='12' md='6' className='order-2 order-md-1'>
            <div className='intro_self'>
              <p className='intro_line_dev'>
                Hey!
                <img
                  className='hi_image'
                  src='https://twemoji.maxcdn.com/2/72x72/1f44b.png'
                  alt='hi'
                ></img>
                <br></br>I am
                <span className='myname_intro'> Sambhav,</span>
                <br></br>I am
                <span className='mydomain_intro'> {<Typewritter />} </span>
              </p>
              <div className='intro_button'>
                <a
                  href='https://drive.google.com/file/d/10rZP6ZQzSIC3t7DAEP8GUbJLW_-toSkM/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button>Resume</Button>
                </a>
                <a href='#contact'>
                  <Button>Contact</Button>
                </a>
              </div>
            </div>
          </Col>
          <Col xs='12' md='6' className='order-1 order-md-2'>
            <img
              src={Sampic2}
              alt="Sambhav's pic"
              height='70%'
              width='70%'
              className='sampic1'
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
