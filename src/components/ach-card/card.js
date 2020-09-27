import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "./card.css";
import sci from "../../assets/sci_2.JPG";
import honeywell from "../../assets/honeyw.JPG";
import Fade from "react-reveal/Fade";

import Button from "../../utils/button-small";

function Cards() {
  return (
    <div>
      <Container>
        <Fade left>
          <h1 className="about_ach_card_h1" id="achievement">
            My Achievements
          </h1>
        </Fade>
        <Fade>
          <Row className="about_skills">
            <Col xs="12" md="4" className="col_ach_card_p mb-3">
              <Card className="figure">
                <CardImg
                  className="hover01"
                  top
                  width="100%"
                  src="https://lh3.googleusercontent.com/bbZezoXAfnXWdxvFh9aNUoC7R2zSPMvK6OH-ELBvRXIsBnWV9b-lkCU9VuZ7WnH63w"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="title_card_ach">Runner's Up!</CardTitle>
                  <CardSubtitle className="subtitle_card_ach">
                    Code2Create by ACMVIT
                  </CardSubtitle>
                  <CardText className="p_card_ach">
                    Runners up in hackathon conducted by ACM VIT . We built a
                    dynamic braile board which would help the visually impaired
                  </CardText>
                  <a href="https://c2c.acmvit.in/" target="_blank">
                    <Button>More info</Button>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="4" className="col_ach_card_p mb-3">
              <Card className="figure">
                <CardImg
                  className="hover01"
                  top
                  // width="100%"
                  height="170px"
                  src={sci}
                  // src="https://media-exp1.licdn.com/dms/image/sync/C5627AQG2uOmMipuikg/articleshare-shrink_1280_800/0?e=1600891200&v=beta&t=U-htSkdHPPfontugKbnrFW9iK6eHUpLVjEQLS3dQT9Y"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="title_card_ach">
                    Student Code-in
                  </CardTitle>
                  <CardSubtitle className="subtitle_card_ach">
                    Open Source Contributer
                  </CardSubtitle>
                  <CardText className="p_card_ach">
                    A group of enthusiastic students wotking on some great
                    projects. Funkids is a react site which is an interactive
                    mode of eduction for juior kids.
                  </CardText>
                  <a href="https://scodein.tech/" target="_blank">
                    <Button>More info</Button>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="4" className="col_ach_card_p">
              <Card className="figure">
                <CardImg
                  className="hover01"
                  top
                  width="100%"
                  height="170px"
                  src={honeywell}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="title_card_ach">Honeywell</CardTitle>
                  <CardSubtitle className="subtitle_card_ach">
                    honeywell accelerator Program
                  </CardSubtitle>
                  <CardText className="p_card_ach">
                    Group of two people along with a mentor solving industry
                    level problems.
                  </CardText>
                  <a href="https://accelerator.honeywell.com/" target="_blank">
                    <Button>More info</Button>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

export default Cards;
