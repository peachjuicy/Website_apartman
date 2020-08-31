import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Carousel, Parallax } from "react-materialize";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 43.94333, lng: 15.45194 }}
    >
      <Marker position={{ lat: 43.94333, lng: 15.45194 }} />
    </GoogleMap>
  ))
);

class About extends Component {
  render() {
    return (
      <div className="content">
        {/* ABOUT US */}
        <Row />
        <Row>
          <Col s={12} xl={6} className="wrapper grey-text text-darken-2">
            <div className="colprops">
              <ScrollAnimation animateIn="fadeIn">
                <h3>About us</h3>
                <h5>Lorem ipsum dolor sit amet</h5>

                <Link to="/contact">
                  {" "}
                  <Button className="button">More info</Button>{" "}
                </Link>
              </ScrollAnimation>
            </div>
          </Col>
          <Col s={12} xl={6}>
            <div>
              <img
                src="/photos/IMG_6841.jpg"
                alt="apartman Ivana, biograd na moru"
                className="imageprops1"
              />
            </div>
          </Col>
        </Row>
        {/* IMAGE */}
        <Row>
          <Parallax imageSrc="/photos/resized.jpg" className="smallerparallax">
            <ScrollAnimation animateIn="fadeIn">
              <h4>Lorem ipsum</h4>
              <h5>Ut enim ad minim veniam</h5>
            </ScrollAnimation>
          </Parallax>
        </Row>
        {/* GALLERY */}
        <Row>
          <Col s={12} xl={6}>
            <div>
              <img
                src="/photos/IMG_6769.jpg"
                alt="apartman Ivana, biograd na moru"
                className="imageprops1"
              />
            </div>
          </Col>
          <Col s={12} xl={6} className="wrapper grey-text text-darken-2">
            <div className="colprops">
              <ScrollAnimation animateIn="fadeIn">
                <h3>Gallery</h3>
                <h5>Lorem ipsum dolor sit amet</h5>
                <Link to="/sleeping">
                  {" "}
                  <Button className="button">More info</Button>{" "}
                </Link>
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
        {/* EXPLORING */}
        <Row>
          <Col s={12} xl={6} className="wrapper grey-text text-darken-2">
            <div className="colprops">
              <ScrollAnimation animateIn="fadeIn">
                <h3>Exploring</h3>
                <h5>Lorem ipsum dolor sit amet</h5>
                <Link to="/exploring">
                  {" "}
                  <Button className="button">More info</Button>
                </Link>
              </ScrollAnimation>
            </div>
          </Col>
          <Col s={12} xl={6}>
            <div>
              <img
                src="/photos/Panorama.jpg"
                alt="apartman Ivana, biograd na moru"
                className="imageprops1"
              />
            </div>
          </Col>
        </Row>
        {/* IMAGE */}
        <Row>
          <Parallax imageSrc="/photos/resized.jpg" className="smallerparallax">
            <ScrollAnimation animateIn="fadeIn">
              <h4>Lorem ipsum</h4>
              <h5>Ut enim ad minim veniam</h5>
            </ScrollAnimation>
          </Parallax>
        </Row>
        {/*IMPRESSIONS */}
        <Row>
          <Carousel
            options={{ fullWidth: true, indicators: true }}
            className="white-text center"
          >
            <div className="grey lighten-1">
              <h3>First Panel</h3>
              <p style={{textAlign:"center"}}> At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque</p>
              <div />
            </div>

            <div className="green">
            <h3>First Panel</h3>
            </div>
            <div className="blue">
            <h3>First Panel</h3>
            </div>
          </Carousel>
        </Row>

        {/*LOCATION */}
        <Row>
          <Col s={12} xl={6} className="wrapper grey-text text-darken-2">
            <div className="colprops">
              <ScrollAnimation animateIn="fadeIn">
                <h3>Where to find us</h3>
                <h5>Lorem ipsum dolor sit amet</h5>
                <Link to="/contact">
                  {" "}
                  <Button className="button">More info</Button>{" "}
                </Link>
              </ScrollAnimation>
            </div>
          </Col>
          <Col s={12} xl={6}>
            <div>
              <ScrollAnimation animateIn="fadeIn">
                <MapWithAMarker
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbL5LIT7LMGC6Gs1ec6ZrNCni_TM2wFWQ&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={
                    <div
                      style={{
                        height: `100%`,
                        borderRadius: "5px"
                      }}
                    />
                  }
                />
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
