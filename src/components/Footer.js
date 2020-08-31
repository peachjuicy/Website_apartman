import React, { Component } from "react";
import { Col, Row } from "react-materialize";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div>
        <Row className="footerrow">
          <Col xl={4} s={12}>
            <br />
            <Link to="/home">
              <h6>Home</h6>
            </Link>
            <Link to="/sleeping">
              <h6>Sleeping</h6>
            </Link>
            <Link to="/exploring">
              <h6>Exploring</h6>
            </Link>
            <Link to="/contact">
              <h6>Contact</h6>
            </Link>
          </Col>
          <Col xl={4} s={12}>
            <h2>Apartman Ivana</h2>
            <h6>Biograd na Moru</h6>
            <h6>apartmanivana@gmail.com</h6>
            <h6>++385 91 1234567</h6>
            <br />
          </Col>
          <Col xl={4} s={12}>
            <Row>
              {" "}
              <i className="fab fa-instagram fa-3x" />
            </Row>
            <Row>
              {" "}
              <i className="fab fa-twitter fa-3x" />
            </Row>
            <Row>
              {" "}
              <i className="fab fa-facebook -f fa-3x" />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
