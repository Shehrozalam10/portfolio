import React from "react";
import "./Home.css";
import Contact from "./Contact";
import Button from "react-bootstrap/Button";
import { Nav } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              welcome to <span style={{ color: "#6c63ff" }}>Shehroz Alam</span>{" "}
            </h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                fontSize: "20px",
              }}
            >
              Full-stack web developer with a specialization in front-end and
              back-end web development. Adaptable to new technology to enhance
              my skills and capabilities.
            </p>
            <div className="btn_div mt-4">
              <Nav.Link href="/contact" className="text-center" >
                <Button variant="dark"  style={{fontSize:"25px"}}> Contact Me</Button>
              </Nav.Link>
            </div>
          </div>
          <div className="right_div">
            <img src="home.png" alt="an image"></img>
            {/* {this image take from the undraw} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
