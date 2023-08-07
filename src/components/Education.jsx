import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import educationData from "./Educationdata";

const Education = () => {
  return (
    <div
      className="container mb3 about_container"
      style={{ minHeight: "100%" }}
    >
      <div className="container main_container d-flex justify-content-around flex-wrap">
        <div className="left_container mb-3 mt-5" style={{ width: 500 }}>
          <h2>Education</h2>
          {/* <div className="row d-flex justify-content-around alignt-item-center"> */}
          {educationData.map((ele, index) => {
            return (
              <>
                <Card
                  style={{ width: "35rem", height: "12rem" }}
                  className="mt-4 mb-4 d-flex justify-content-center flex-row"
                >
                  <Card.Img
                    variant="top"
                    src={ele.imgsrc}
                    style={{ width: "12rem", height: "12rem", marginLeft: 0 }}
                  />
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <Card.Title className="text-center">
                      {ele.class}
                      {"      "}
                      {ele.year}
                    </Card.Title>
                    <Card.Text className="text-center">
                      <Card.Link
                        href={ele.location}
                        target="_blank"
                        className="mx-3 "
                        
                      >
                        <i className="fa fa-map-marker fa-2x " ></i>
                      </Card.Link>
                      {ele.instituteName}
                      {" ,"}
                      {ele.place}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </>
            );
          })}
          {/* </div> */}
        </div>
        <div className="right_container mt-3">
          <img src="education-right.png" alt="an image" />
          {/* portfoli member image */}
        </div>
      </div>
    </div>
  );
};

export default Education;
