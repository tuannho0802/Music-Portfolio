import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProfileImgs from "./ProfileImgs";
import ProfileVideo from "./ProfileVideos";

function VideoImg() {
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
              <strong className="purple">Images (Hình Ảnh)</strong>
            </h1>
          </Col>
          <ProfileImgs />
        </Row>

        {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          <strong className="purple">Videos</strong>
        </h1>
        <ProfileVideo /> */}
      </Container>
    </Container>
  );
}

export default VideoImg;
