import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import Welcome from './components/Welcome/Welcome';

import './main.css';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};
render(Welcome);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Welcome/Welcome', () => { 
    render(Welcome); 
  });
}