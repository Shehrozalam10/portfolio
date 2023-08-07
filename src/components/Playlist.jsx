import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectData from "./Data";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";

const Playlist = () => {
  const [spin, setspin] = useState(true);

  useEffect(() => {
    setspin(true);
    setTimeout(() => {
      setspin(false);
    }, 2000);
  }, []);

  return (
    <>
      {spin ? (
        <div className="d-flex justify-content-center align-items-center " style={{height:"90vh"}}>
          <Spinner animation="border" variant="danger" />&nbsp;  loading....
        </div>
      ) : (
        <div className="container">
          <h2 className="text-center mt-2 ">Projects</h2>
          <div className="card_div">
            <div className="row d-flex justify-content-around alignt-item-center">
              {projectData.map((val, index) => {
                return (
                  <>
                    <Card
                      style={{ width: "20rem", height: "18rem" }}
                      className="mt-4 mb-4"
                    >
                      <Card.Img
                        variant="top"
                        src="val.imgsrc"
                        style={{ width: "20rem", marginLeft: -13 }}
                      />
                      <Card.Body className="d-flex justify-content-center flex-column">
                        <Card.Title className="text-center">
                          {val.projectName}
                        </Card.Title>

                        <Button variant="primary">
                          <a
                            href={val.demo}
                            target="_blank"
                            className="text-decoration-none text-light"
                          >
                            {" "}
                            Live demo
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Playlist;
