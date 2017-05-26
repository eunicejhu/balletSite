import React, { Component } from 'react';
// import styles from './App.css';

// Page
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const DEFAULT_LOCAL = 'en';

class App extends Component {
  constructor(props) {
    super(props);
    const initialLocal = props.local || DEFAULT_LOCAL;
    this.state = {
      local: initialLocal,
    };
  }

  render() {
    const { local } = this.state;
    return (
      <div id="app">
        <Header local={local} />
        <Home local={local} />
        <Footer local={local} />
      </div>
    );
  }
}

export default App;
