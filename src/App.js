import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <div id="style-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="style-main">
            <Introduction />
            <About />
            <Timeline />
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
