import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Row, Container, Col, Card, Button, Carousel } from "react-materialize";

class Sleeping extends Component {
  render() {
    return (
      <div>
        <Header />
        <Row>
          <Container>
            <Col s={12} xl={5}>
              <h5 style={{ textAlign: "center" }}>About Apartman Ivana</h5>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </Col>
            <Col xl={2} />
            <Col s={12} xl={5} style={{ marginTop: "50px" }}>
              <Card
                className="blue-grey lighten-1 card"
                textClassName="white-text"
                title="Prices from"
              >
                <h6>100 E per night</h6>
                <br />
                <Button className="button" node="a" waves="light" large>
                  {" "}
                  Send reservation
                </Button>
              </Card>
            </Col>
          </Container>
        </Row>
        <Row>
          <Container>
            <h5>What we offer</h5>
            <p>
              {" "}
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
          </Container>
        </Row>
        <Row>
          <Container style={{ textAlign: "center", color:"#616161" }}>
            <Col xl={3} s={3}>
              <i className="fas fa-parking fa-5x" />
            </Col>
            <Col xl={3} s={3}>
              <i className="fas fa-snowflake fa-5x" />
            </Col>
            <Col xl={3} s={3}>
              <i className="fas fa-wifi fa-5x" />
            </Col>
            <Col xl={3} s={3}>
              <i className="fas fa-tv fa-5x" />
            </Col>
          </Container>
        </Row>
        <Row />

        <Row>
          <div>
            <Container>
            
            </Container>
          </div>
        </Row>

        <Footer />
      </div>
    );
  }
}

export default Sleeping;
