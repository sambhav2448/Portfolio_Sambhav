import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./skills.css";
import Fade from "react-reveal/Fade";

function Skills() {
  return (
    <Fade right>
      <div>
        <Container>
          <h1 className="about_skills_h1">My Skills</h1>
          <Row className="about_skills">
            <Col xs="6" md="3" className="col_skill_p">
              <i className="fab icon_skill fa-react"></i>
              <p>React</p>
            </Col>
            <Col xs="6" md="3" className="col_skill_p">
              <i className="fab fa-html5  icon_skill"></i>
              <p>HTML</p>
            </Col>
            <Col xs="6" md="3" className="col_skill_p">
              <i className="fab fa-css3  icon_skill"></i>
              <p>CSS</p>
            </Col>
            <Col xs="6" md="3" className="col_skill_p">
              <i className="fab fa-js  icon_skill"></i>
              <p>Javascript</p>
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="3" className="col_skill_p">
              <i className="fab fa-node  icon_skill"></i>
              <p>Node.js</p>
            </Col>
            <Col xs="6" md="3" className="col_skill_p">
              {/* <i className="fas fa-database icon_skill"></i> */}
              <span
                className="iconify icon_skill iconifyr"
                data-icon="cib:mongodb"
                data-inline="false"
              ></span>
              <p>Mongo DB</p>
            </Col>
            <Col xs="6" md="3" className="col_skill_p">
              {/* <i className="fas fa-fire  icon_skill"></i> */}
              <span
                className="iconify icon_skill iconifyr"
                data-icon="cib:firebase"
                data-inline="false"
              ></span>
              <p>Firebase</p>
            </Col>
            <Col xs="6" md="3" className="col_skill_p">
              <i className="fas fa-database  icon_skill"></i>
              <p>SQL</p>
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="3" className="col_skill_p">
              {/* <i className="fab fa-react  icon_skill"></i> */}
              <span
                className="iconify icon_skill iconifyr"
                data-icon="simple-icons:redux"
                data-inline="false"
              ></span>
              <p>Redux</p>
            </Col>
            <Col xs="6" md="3" className="col_skill_p">
              <i className="fab fa-android icon_skill"></i>
              <p>React Native</p>
            </Col>
            <Col xs="6" md="3" className="col_skill_p">
              <i className="fab fa-python  icon_skill"></i>
              <p>Python</p>
            </Col>
            <Col xs="6" md="3" className="col_skill_p">
              <i className="fab fa-java  icon_skill"></i>
              <p>Java</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fade>
  );
}

export default Skills;
