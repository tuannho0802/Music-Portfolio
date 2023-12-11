import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import micImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* Img */}
            <img src={micImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 className="project-heading">
            <strong className="purple">Contact - Liên Hệ </strong>
          </h1>
          <Row
            className="tech-icons"
            style={{ justifyContent: "center", fontSize: "30px" }}
          >
            <p>
              {" "}
              <span className="purple">Email:</span>{" "}
              <p style={{ fontSize: "23px" }}>
                dinhbaotronghoang1410@gmail.com
              </p>
            </p>
          </Row>
          <Row
            className="tech-icons"
            style={{ justifyContent: "center", fontSize: "30px" }}
          >
            <p style={{ fontFamily: "Arial" }}>
              <span className="purple">Booking:</span> 0336032659
            </p>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
