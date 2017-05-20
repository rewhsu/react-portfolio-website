import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedKey) {
    console.log('selected ' + selectedKey);
  }
  render() {
      return (
        <Router>
        <Nav bsStyle="tabs" activeKey={1} onSelect={(selected) => this.handleSelect(selected)}>
          <LinkContainer to="/home">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
            <LinkContainer to="/projects/1">
              <MenuItem eventKey={3.1}>Project #1</MenuItem>    
            </LinkContainer>      
            <LinkContainer to="/projects/2">
              <MenuItem eventKey={3.1}>Project #2</MenuItem>    
            </LinkContainer>  
          </NavDropdown>  
          <LinkContainer to="/contact">
            <MenuItem eventKey={4}>Contact</MenuItem>    
          </LinkContainer> 
          <br />
          {/*<LinkContainer to="/admin">
            <MenuItem eventKey={4}>Admin</MenuItem>    
          </LinkContainer>*/}     
          <Route exact path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        {/*<Route path="/admin" component={Login}/>*/}
        </Nav>
        </Router>
    );
  }
}
