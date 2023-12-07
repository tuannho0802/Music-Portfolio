import React from "react";
import { Col, Row } from "react-bootstrap";

import { BsMicFill } from "react-icons/bs";
import { FaGuitar } from "react-icons/fa";
import { MdOutlinePiano } from "react-icons/md";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BsMicFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGuitar />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlinePiano />
      </Col>
    </Row>
  );
}

export default Techstack;
