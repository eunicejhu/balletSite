import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Home from '../home/Home';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/" component={Home}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

Main.propTypes = {

};

export default Main;
