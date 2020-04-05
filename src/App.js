import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mask from "./component/Mask";
import Nav from "./component/Nav";
import Silkum from "./component/Silkum";
import Translation from './component/Translation';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Route exact path="/" component = {Silkum} />
          <Route exact path="/mask" component = {Mask} />
          <Route exact path="/translation" component = {Translation} />
        </Router>
      </>
    );
  }
}

export default App;
