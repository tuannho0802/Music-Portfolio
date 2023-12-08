import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { BsFillCaretRightFill, BsCheckCircleFill } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      {/* English */}
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <h2>English:</h2>
            <BsFillCaretRightFill />
            I'm honored to cooperate with partners and customers in{" "}
            <span className="purple"> Ho Chi Minh City.</span>
            <br />
            <BsFillCaretRightFill />
            Performances according to the theme and content of the show
            <br />
            <BsFillCaretRightFill />
            Genre and performance style:
            <span className="purple"> RnB, Ballad, Rock, Ballad Rock.</span>
            <br />
            <BsFillCaretRightFill />
            Languages:
            <span className="purple"> Vietnamese & English.</span>
            <br />
            <p style={{ marginTop: "20px", marginLeft: "20px" }}>
              <BsCheckCircleFill />
              &nbsp; Flexible time, proactive means of transportation.
            </p>
            <p style={{ marginLeft: "20px" }}>
              <BsCheckCircleFill />
              &nbsp; Diverse genres and styles.
            </p>
            <p style={{ marginLeft: "20px" }}>
              <BsCheckCircleFill />
              &nbsp; Dresscode matches content & requirements.
            </p>
          </p>
        </blockquote>
      </Card.Body>

      {/* Vietnamese */}
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <h2>Tiếng Việt:</h2>
            <BsFillCaretRightFill />
            Tôi rất vinh dự được hợp tác với các đối tác, khách hàng tại{" "}
            <span className="purple"> TP.HCM.</span>
            <br />
            <BsFillCaretRightFill />
            Biểu diễn theo chủ đề, nội dung của chương trình.
            <br />
            <BsFillCaretRightFill />
            Thể loại và phong cách biểu diễn:
            <span className="purple"> RnB, Ballad, Rock, Ballad Rock.</span>
            <br />
            <BsFillCaretRightFill />
            Ngôn ngữ:
            <span className="purple"> Tiếng Việt & Tiếng Anh.</span>
            <br />
            <p style={{ marginTop: "20px", marginLeft: "20px" }}>
              <BsCheckCircleFill />
              &nbsp; Thời gian linh hoạt, chủ động phương tiện di chuyển.
            </p>
            <p style={{ marginLeft: "20px" }}>
              <BsCheckCircleFill />
              &nbsp; Thể loại và phong cách đa dạng.
            </p>
            <p style={{ marginLeft: "20px" }}>
              <BsCheckCircleFill />
              &nbsp; Dresscode phù hợp với nội dung và yêu cầu.
            </p>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
