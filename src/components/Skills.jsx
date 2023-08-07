import React from 'react'
import { useState,useEffect } from 'react';
import { Card } from 'react-bootstrap';
import skillsData from './Skillsdata'
import Spinner from "react-bootstrap/Spinner";

const Skills = () => {
    const [spin, setspin] = useState(true);

    useEffect(() => {
      setspin(true);
      setTimeout(() => {
        setspin(false);
      }, 50);
    }, []);
  
    return (
      <>
        {spin ? (
          <div className="d-flex justify-content-center align-items-center " style={{height:"90vh"}}>
            <Spinner animation="border" variant="danger" />&nbsp;  loading....
          </div>
        ) : (
          <div className="container">
            <h2 className="text-center mt-2 ">Skills</h2>
            <div className="card_div">
              <div className="row d-flex justify-content-around alignt-item-center">
                {skillsData.map((ele, index) => {
                  return (
                    <>
                      <Card
                        style={{ width: "10rem", height: "12rem" }}
                        className="mt-4 mb-4 text-center mx-3"
                      >
                        <Card.Img
                          variant="top"
                          src={ele.imgsrc}
                          style={{ width: "10rem",height:"9rem", marginLeft: -13}}

                        />
                        <Card.Body className="d-flex justify-content-center flex-column">
                          <Card.Title className="text-center">
                            {ele.skillName}
                          </Card.Title>
  
                        
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
}

export default Skills