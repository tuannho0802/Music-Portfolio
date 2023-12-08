import React from "react";
import { Col, Row } from "react-bootstrap";
// import profile1 from "../../Assets/ProfileVideos/video1.mp4";
// import profile2 from "../../Assets/ProfileVideos/video2.mp4";
// import profile3 from "../../Assets/ProfileVideos/video3.mp4";
import profile4 from "../../Assets/ProfileVideos/video4.mp4";

function ProfileVideo() {
  return (
    <div>
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        {/* <Col xs={1} md={1} className="tech-icons">
          <video src={profile1} controls className="video-stand"></video>
          <p>Hello</p>
        </Col>
        <Col xs={1} md={1} className="tech-icons">
          <video src={profile2} controls className="video-stand"></video>
          <p>Hello</p>
        </Col>
        <Col xs={1} md={1} className="tech-icons">
          <video src={profile3} className="video-stand" controls></video>
          <p>Hello</p>
        </Col> */}
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={1} md={1} className="tech-icons">
          <video src={profile4} className="video-lying" controls></video>
          Hello
        </Col>
      </Row>
    </div>
  );
}

export default ProfileVideo;
