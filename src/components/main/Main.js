import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './home/Home';
import Inscription from './inscription/Inscription';
import Events from './events/Events';
import Equipements from './equipements/Equipements';
import Contact from './contact/Contact';
import MENUS, { HOME, INSCRIPTION, EVENTS, EQUIPEMENTS, CONTACT } from 'utils/constants/menus';
import getPathFromMenu from 'utils/routes/getPathFromMenu';
import reverse from 'utils/array/reverse';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: window.location.pathname,
    };
  }
  render() {
    const { local } = this.props; 
    const routesJSX = reverse(MENUS).map((menu, index) => {
      const menuPath = getPathFromMenu(menu.toLowerCase());
      return <Route 
                key={index} 
                path={menuPath} 
                render={routeProps => {
                  let component;
                  switch (menu) {
                    case HOME:
                      component = <Home {...routeProps} local={local} />;
                      break;
                    case INSCRIPTION: 
                      component = <Inscription {...routeProps} local={local} />;
                      break;
                    case EVENTS:
                      component = <Events {...routeProps} local={local} />;
                      break;
                    case EQUIPEMENTS: 
                      component = <Equipements {...routeProps} local={local} />;
                      break;
                    case CONTACT: 
                      component = <Contact {...routeProps} local={local} />;
                      break;
                    default:
                      component = '<div>not found</div>';
                  }
                  return component;
                }}
            />;
    });
    return <Switch>{ routesJSX }</Switch>;
  }
}

Main.propTypes = {
  local: PropTypes.string.isRequired,
};

export default Main;
