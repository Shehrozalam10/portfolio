import React from 'react'
import { Card } from "react-bootstrap";

const Experience = () => {
  const ele={
    companyName:"internPe",
    peroid:"12 JUNE - 9 JULY",
    duration:"   (1 month)",
    domain:"c++ programming remote intern",
    imgsrc:"internpe.jpeg",
  }
  return (
    <div
      className="container mb3 about_container"
      style={{ minHeight: "100%" }}
    >
      <div className="container main_container d-flex justify-content-around flex-wrap">
        <div className="left_container mb-3 mt-5" style={{ width: 500 }}>
          <h2>Experience</h2>
          {/* <div className="row d-flex justify-content-around alignt-item-center"> */}
          {/* {educationData.map((ele, index) => {
            return (
              <> */}
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
                      {ele.companyName}
                     
                    </Card.Title>
                    <Card.Text className="text-center">
                     
                      {ele.domain}
                    </Card.Text>
                    <Card.Text className="text-center">
                     
                     
                     
                      {ele.peroid}{ele.duration}
                    </Card.Text>
                  </Card.Body>
                </Card>
              {/* </>
            );
          })} */}
          {/* </div> */}
        </div>
        <div className="right_container mt-3">
          <img src="experience.png" alt="an image" />
          {/* portfoli member image */}
        </div>
      </div>
    </div>
  );
}

export default Experience