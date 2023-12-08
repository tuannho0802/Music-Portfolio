import React from "react";
import { Col, Row } from "react-bootstrap";
import profile1 from "../../Assets/ProfileImgs/photovlu1.jpg";
import profile2 from "../../Assets/ProfileImgs/photovlu2.jpg";
import profile3 from "../../Assets/ProfileImgs/photovlu3.jpg";
import profile4 from "../../Assets/ProfileImgs/photovlu4.jpg";

import vlgt1 from "../../Assets/ProfileImgs/photovlgt1.jpg";
import vlgt2 from "../../Assets/ProfileImgs/photovlgt2.jpg";
import vlgt3 from "../../Assets/ProfileImgs/photovlgt3.jpg";
import vlgt4 from "../../Assets/ProfileImgs/photovlgt4.jpg";
import vlgt5 from "../../Assets/ProfileImgs/photovlgt5.jpg";
import vlgt6 from "../../Assets/ProfileImgs/photovlgt6.jpg";

function ProfileImgs() {
  return (
    <div>
      {/* VLU */}

      <Col
        style={{
          justifyContent: "center",
        }}
        className="tech-icons"
      >
        <img src={profile1} alt="avatar" className="img-fluid" />
      </Col>

      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <Col xs={1} md={2} className="tech-icons">
          <img
            src={profile2}
            className="img-fluid"
            alt="avatar"
            style={{ minHeight: "350px", minWidth: "350px" }}
          />
        </Col>
        <Col xs={1} md={2} className="tech-icons">
          <img
            src={profile3}
            className="img-fluid"
            alt="avatar"
            style={{ minHeight: "200px", minWidth: "350px" }}
          />
        </Col>
        <Col xs={1} md={2} className="tech-icons">
          <img
            src={profile4}
            className="img-fluid"
            alt="avatar"
            style={{ minHeight: "350px", minWidth: "350px" }}
          />
        </Col>
      </Row>

      {/* VLGT */}
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <Col xs={1} md={2} className="tech-icons">
          <img
            style={{ minHeight: "350px", minWidth: "300px" }}
            src={vlgt1}
            className="img-fluid"
            alt="avatar"
          />
        </Col>

        <Col xs={1} md={2} className="tech-icons">
          <img
            style={{ minHeight: "350px", minWidth: "300px" }}
            src={vlgt4}
            className="img-fluid"
            alt="avatar"
          />
        </Col>
        <Col xs={1} md={2} className="tech-icons">
          <img
            style={{ minHeight: "350px", minWidth: "300px" }}
            src={vlgt5}
            className="img-fluid"
            alt="avatar"
          />
        </Col>
        <Col xs={1} md={2} className="tech-icons">
          <img
            style={{ minHeight: "350px", minWidth: "300px" }}
            src={vlgt6}
            className="img-fluid"
            alt="avatar"
          />
        </Col>
      </Row>

      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <Col xs={1} md={2} className="tech-icons">
          <img src={vlgt2} style={{ maxWidth: "500px" }} alt="avatar" />
        </Col>
        <Col xs={1} md={2} className="tech-icons">
          <img src={vlgt3} style={{ maxWidth: "500px" }} alt="avatar" />
        </Col>
      </Row>
    </div>
  );
}

export default ProfileImgs;
