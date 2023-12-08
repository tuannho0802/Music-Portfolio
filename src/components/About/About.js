import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import micImg from "../../Assets/about.png";

function About() {
  const handleCopyToClipboard = (text) => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Optionally, provide feedback to the user
    alert(`Copied to clipboard: ${text}`);
  };

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
            onClick={() => handleCopyToClipboard("example@email.com")}
            style={{ justifyContent: "center", fontSize: "30px" }}
          >
            Email: Hello
          </Row>
          <Row
            onClick={() => handleCopyToClipboard("Booking information")}
            style={{ justifyContent: "center", fontSize: "30px" }}
          >
            Booking: Hello
          </Row>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
