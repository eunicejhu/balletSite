import React, { Component } from 'react';
// import styles from './App.css';

// Page
import Header from './components/header/Header';
import Main from './components/main/Main';
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
      <div id="wrapper">
        <header><Header local={local} /></header>
        <main>
            <Main local={local} />
        </main>
        <footer><Footer local={local} /></footer>
      </div>
    );
  }
}

export default App;
