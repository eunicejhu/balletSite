import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import getTranslationsFromLocal from '../../utils/languages/getTranslationsFromLocal';

import Home from '../home/Home';
import Inscription from './inscription/Inscription';
import Events from './events/Events';
import Equipements from './equipements/Equipements';
import Contact from './contact/Contact';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { local } = this.props; 
    return (
      <Switch>
        <Route path="/" render={routeProps => <Home {...routeProps} local={local} />}></Route>
        <Route path="/inscription" component={Inscription}></Route>
        <Route path="/events" component={Events}></Route>
        <Route path="/equipements" component={Equipements}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    );
  }
}

Main.propTypes = {

};

export default withRouter(Main);
