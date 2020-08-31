import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Row, Col, Button, Parallax, MediaBox } from "react-materialize";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class Exploring extends Component {
  render() {
    return (
      <div>
        <Header />
        <Row />
        <Row>
          <Col s={12} xl={6} className="wrapper grey-text text-darken-2">
            <div className="colprops">
              <ScrollAnimation animateIn="fadeIn">
                <h3>National park Kornati</h3>
                <h5>Lorem ipsum dolor sit amet</h5>

                <a href="http://www.np-kornati.hr/hr/" target="_blank" rel="noopener noreferrer" >
                  <Button className="button">More info</Button>{" "}</a>
               
              </ScrollAnimation>
            </div>
          </Col>
          <Col s={12} xl={6}>
            <div>
              <Parallax
                imageSrc="/photos/kornati.jpg"
                className="imageprops1"
              />
            </div>
          </Col>
        </Row>
        <Row />
        <Row>
          <Col s={12} xl={6}>
            <div>
              <Parallax
                imageSrc="/photos/funparkb.jpg"
                className="imageprops1"
              />
            </div>
          </Col>
          <Col s={12} xl={6} className="wrapper grey-text text-darken-2">
            <div className="colprops">
              <ScrollAnimation animateIn="fadeIn">
                <h3>Fun park Biograd</h3>
                <h5>Lorem ipsum dolor sit amet</h5>
                <a href="https://www.funparkbiograd.com/" target="_blank" rel="noopener noreferrer" ><Button className="button">Read more</Button>{" "}</a>
                  
              
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
        <Row />
        <Row>
          <h5> For more events check out: </h5>
          
        
          <Col s={12} xl={4}>
            <div>
              <Parallax
                imageSrc="/photos/funparkb.jpg"
                className="imageprops1"
              />
            </div>
          </Col>
          <Col s={12} xl={4}>
            <div>
             <a href="https://tzg-biograd.hr" target="_blank" rel="noopener noreferrer" > <MediaBox
               src="/photos/logobg.jpg"
                className="imageprops1"
              /></a>
            </div>
          </Col>
          <Col s={12} xl={4}>
            <div>
              <Parallax
                imageSrc="/photos/funparkb.jpg"
                className="imageprops1"
              />
            </div>
          </Col>
          
        </Row>
        <Footer />
      </div>
    );
  }
}

export default Exploring;
