import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default class Navbar extends React.Component {
  handleSelect(selectedKey) {
    console.log('selected ' + selectedKey);
  }
  render() {
    return (
      <Router>
        <Nav bsStyle="tabs" activeKey={1} onSelect={(a) => this.handleSelect(a)}>
          <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
          <NavItem eventKey={2}><Link to="/about">About</Link></NavItem>
          <NavItem eventKey={3}><Link to="/projects">Projects</Link></NavItem>
          <NavItem eventKey={4}><Link to="/contact">Contact</Link></NavItem>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Nav>
      </Router>
    )
  }
}
