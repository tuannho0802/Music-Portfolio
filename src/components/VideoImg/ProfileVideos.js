import React from "react";
import { Col, Row } from "react-bootstrap";

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
        </Col> */}

        <Col xs={1} md={1} className="tech-icons">
          <iframe
            width="576"
            height="1024"
            className="video-stand"
            title="TrongHoang-Tiktok1"
            src="https://screenpal.com/player/c0lQeQVm5HA?width=576&height=1024&ff=1&bg=transparent&download=1&embed=1"
            allowfullscreen="true"
          ></iframe>
          <p>Hẹn Một Mai - Nguyễn Duy Anh | Cover</p>
        </Col>

        <Col xs={1} md={1} className="tech-icons">
          <iframe
            width="720"
            height="1280"
            title="TrongHoang-VLU2"
            className="video-stand"
            src="https://screenpal.com/player/c0lQejVm5Hz?width=720&height=1280&ff=1&bg=transparent&download=1&embed=1"
            allowfullscreen="true"
          ></iframe>
          <p>Writing's On The Wall - Sam Smith | Cover</p>
        </Col>

        <Col xs={1} md={1} className="tech-icons">
          <iframe
            width="720"
            height="1280"
            title="TrongHoang-VLU3"
            className="video-stand"
            src="https://screenpal.com/player/c0lQejVm5Ha?width=720&height=1280&ff=1&bg=transparent&download=1&embed=1"
            allowfullscreen="true"
          ></iframe>
          <p>Cơn Mưa Tháng 5 - Trần Lập | Cover</p>
        </Col>

        <Col xs={1} md={1} className="tech-icons">
          <iframe
            width="720"
            height="1280"
            title="TrongHoang-Tiktok2"
            className="video-stand"
            src="https://screenpal.com/player/c0lQe7Vm5Ku?width=720&height=1280&ff=1&bg=transparent&download=1&embed=1"
            allowfullscreen="true"
          ></iframe>
          <p>Tìm Lại - Microwave | Cover</p>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={1} md={1} className="tech-icons">
          <iframe
            width="640"
            height="360"
            className="video-lying"
            title="TrongHoang-VLU1"
            src="https://screenpal.com/player/c0lQeQVm5Hk?width=640&height=360&ff=1&bg=transparent&download=1&embed=1"
            allowfullscreen="true"
          ></iframe>
          <p>Đại Lộ Tan Vỡ - Uyên Linh | Cover</p>
        </Col>

        <Col xs={1} md={1} className="tech-icons">
          <iframe
            width="600"
            height="360"
            className="video-lying"
            title="TrongHoang-VLU4"
            src="https://screenpal.com/player/c0lQe7Vm5Kv?width=600&height=360&ff=1&bg=transparent&download=1&embed=1"
            allowfullscreen="true"
          ></iframe>
          <p>Bartender - Ngọt | Cover</p>
        </Col>
      </Row>
    </div>
  );
}

export default ProfileVideo;
