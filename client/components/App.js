import React from 'react';
import Projects from './Projects';
import Navbar from './Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        App
        <Projects />
      </div>
    )
  }
}