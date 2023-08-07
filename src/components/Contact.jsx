import React from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Contact = () => {
  const year = new Date().getFullYear();
  const [inputval, setinputval] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    massage: "",
  });
  const getValue = (e) => {
    const { name, value } = e.target;
    setinputval((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="container mb-3 contact ">
        <h2 className="text-center"></h2>
        <div className="container mb-2">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>first name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                placeholder="Enter first name"
                onChange={getValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>last name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                placeholder="Enter last name"
                onChange={getValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={getValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                placeholder="Enter mobile number"
                onChange={getValue}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="massage"
                onChange={getValue}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className="col-lg-6" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <p>
              <a href="https://www.facebook.com/shehroz.alam.5" target="_blank">
              <i
                className="fa-brands fa-facebook mx-3 fa-4x"
                style={{ color: "#3b5998" }}
              ></i>
              </a>
              <a href="https://www.instagram.com/shehroz_alam_/" target="_blank">
              <i
                className="fab fa-instagram mx-3 fa-4x"
                style={{ color: " #E4405f" }}
              ></i>
              </a>
              <a href="https://twitter.com/ShehrozAlam6" target="_blank">
              <i
                className="fab fa-twitter mx-3 fa-4x"
                style={{ color: "#00acee" }}
              ></i>
              </a>
              <a href="https://www.linkedin.com/in/shehroz-alam-5b0b3b1b2/" target="_blank">
              <i
                className="fab fa-linkedin mx-3 fa-4x"
                style={{ color: "#0072b1 " }}
              ></i>
              </a>
              <a href="https://github.com/Shehrozalam10" target="_blank">
              <i
                className="fab fa-github mx-3 fa-4x"
                style={{ color: "black" }}
              ></i>
              </a>
            </p>

            <h3>Made by ❤️ shehroz alam</h3>
            <p className="text-center"> © {year} Portfolio </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
