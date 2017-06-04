import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
           <Component />
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
  );
};
render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { 
    render(App); 
  });
}