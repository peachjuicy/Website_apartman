import React, { Component } from "react";
import { Row, Container, Col, Button } from "react-materialize";
import Header from "./Header";
import Footer from "./Footer";
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

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <Row>
          <Container className="row">
            <h5>About Apartman Ivana</h5>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. At vero eos et accusamus et
              iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident, similique sunt
              in culpa qui officia deserunt mollitia animi, id est laborum et
              dolorum fuga. At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti atque
              corrupti quos dolores et quas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </Container>
        </Row>
        <Row>
          <h5>Find Apartman Ivana in Biograd</h5>
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
        </Row>
        <Row>
          <h5>Contact Apartman Ivana</h5>
          <Container>
            <Col s={12} xl={12}>
              <form method="POST" action="send-mail.php">
                <Row>
                  <input
                    type="text"
                    placeholder="Name"
                    name="first_name"
                    className="input-field "
                    onChange={this.handleChange}
                  />
                </Row>

                <Row>
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    className="input-field "
                    onChange={this.handleChange}
                  />
                </Row>

                <Row>
                  <textarea
                    placeholder="Message"
                    rows="10"
                    cols="30"
                    className="materialize-textarea input-field "
                    name="comments"
                    onChange={this.handleChange}
                  />
                </Row>

                <div className="row center-align">
                  <Button
                    className="btn waves-effect waves-light amber"
                    type="submit"
                    name="action"
                  >
                    Send
                    <i className="material-icons right">send</i>
                  </Button>
                </div>
              </form>
            </Col>
          </Container>
        </Row>
        {/*<Row>
         <h5>Book a date at Apartman Ivana</h5>
          <Container>
          <iframe
            title="calendar for booking"
            src="https://calendar.google.com/calendar/embed?src=hr.croatian%23holiday%40group.v.calendar.google.com&ctz=Europe%2FBelgrade"
            style={{
              
              border: "0",
              width: "80%",
              height: "500px",
              frameborder: "0",
              scrolling: "yes"
            }}
          /></Container>
        </Row>*/}
        <Footer />
      </div>
    );
  }
}

export default Contact;
