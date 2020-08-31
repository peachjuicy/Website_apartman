import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sleeping from "./components/Sleeping";
import Exploring from "./components/Exploring";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/sleeping" component={Sleeping} />
            <Route path="/exploring" component={Exploring} />
            <Route path="/contact" component={Contact} />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
