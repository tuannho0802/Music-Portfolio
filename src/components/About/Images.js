import React from "react";
import { Col, Row } from "react-bootstrap";
import profile1 from "../../Assets/ProfileImgs/photo1.jpg";
import profile2 from "../../Assets/ProfileImgs/photo2.jpg";
import profile3 from "../../Assets/ProfileImgs/photo3.jpg";

function Images() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={profile1} className="img-fluid" alt="avatar" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={profile2} className="img-fluid" alt="avatar" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={profile3} className="img-fluid" alt="avatar" />
      </Col>
    </Row>
  );
}

export default Images;
