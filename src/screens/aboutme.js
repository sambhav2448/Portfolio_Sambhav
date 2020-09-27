import React from "react";
import { Container, Row, Col } from "reactstrap";

import Aboutdesc from "../components/aboutme/desc";
import Skills from "../components/aboutme/skills";
import "./main.css";

function About() {
  return (
    <section className="aboutme content_cursor" id="about">
      <Container>
        <Row>
          <Col xs="12" md="6">
            <Aboutdesc />
          </Col>
          <Col xs="12" md="6">
            <Skills />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
