import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Dinh Bao Trong Hoang </span>
            <br />
            sample
            <br />
            sample.
            <br />
            <br />
            Apart from singing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Practice Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Composed
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
