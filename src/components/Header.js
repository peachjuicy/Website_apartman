import React, { Component } from "react";
import { Navbar, NavItem, Parallax } from "react-materialize";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import {Link} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div>
        <Parallax imageSrc="/photos/beach.jpg">
          <Navbar
            brand={<a href="#!">Apartman Ivana</a>}
            alignLinks="right"
            className="navbar "
          >
            <Link to="/">Home</Link>
            <Link to="/sleeping">Sleeping</Link>
            <Link to="/exploring">Exploring</Link>
            <Link to="/contact">Contact</Link>
            <NavItem>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram " /></a> 
            </NavItem>
            <NavItem>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter" /></a> 
            </NavItem>
            <NavItem>
             <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook-f" /></a> 
            </NavItem>
          </Navbar>

          <h1>
            <ScrollAnimation animateIn="fadeInUp">
              Where passion meets the ground
            </ScrollAnimation>
          </h1>
        </Parallax>
      </div>
    );
  }
};

export default Header;
