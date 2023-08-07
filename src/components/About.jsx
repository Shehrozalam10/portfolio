import React from "react";
import "./About.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <div
      className="container mb3 about_container"
      style={{ minHeight: "100%" }}
    >
      <div className="container main_container d-flex justify-content-around flex-wrap">
        <div className="left_container mb-3 mt-5" style={{ width: 500 }}>
          <h2>Meet Shehroz Alam</h2>
          <p style={{ fontSize: "20px" }}>
            My name's <span>SHEHROZ ALAM</span>.I'm a{" "}
            <span>Front End Web Developer</span> from Bulandshahr, Utter
            Pradesh.
            <br />
            <br />I believe that the power of technology can make people's lives
            easier and that new frameworks and technology make developers more
            productive to the tech community. Learning HTML, CSS and JavaScript
            from my Degree journey, piqued my interest in coding. Since then my
            life has been about pursuing a career in coding and web development.
          </p>
        </div>
        <div
          className="right_container mt-3 "
         
        >
          {/* <img src="shehroz.jpg" alt="an image" /> */}
          {/* <Container> */}
            <Row>
              {/* <Col xs={6} md={4}>
                <Image src="shehroz.jpg" rounded />
              </Col> */}
              <Col xs={8} md={4} >
                <Image src="shehroz.jpg" roundedCircle />
              </Col>
             
            </Row>
          {/* </Container> */}
          {/* portfoli member image */}
        </div>
      </div>
    </div>
  );
};

export default About;
