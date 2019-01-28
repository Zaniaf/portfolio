import React, { Component } from 'react';
import About from './components/About/About';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <About />
        <Main />
        <Skills />
      </div> 
    );
  }
}

export default App;
