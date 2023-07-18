
'use client';
import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
  {
    src: require("/home/dci-student/WD/BACKEND/finalprojektmylore/src/assets/gallery/screenshots/Bildschirmfoto vom 2023-05-26 13-28-12.png"),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require("/home/dci-student/WD/BACKEND/finalprojektmylore/src/assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-26-04.png"),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require("/home/dci-student/WD/BACKEND/finalprojektmylore/src/assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-27-04.png"),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Example = () => (
  <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);

export default Example;