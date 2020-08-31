import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import About from './About';

class Home extends Component {
  render() {
    return (

      
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default Home;
