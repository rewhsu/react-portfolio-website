import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>&nbsp;
//       <Link to="/about">About</Link>&nbsp;
//     </nav>
//   )
// }

// export default Navbar;

import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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
          <Nav bsStyle="tabs" activeKey={1} onSelect={(selected) => this.handleSelect(selected)}>
            <LinkContainer exact to="/">
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
                <MenuItem eventKey={3.2}>Project #2</MenuItem>    
              </LinkContainer>  
              <MenuItem divider />
              <LinkContainer exact to="/projects">
                <MenuItem eventKey={3.3}>All Projects</MenuItem>    
              </LinkContainer>   
            </NavDropdown>  
            <LinkContainer to="/contact">
              <MenuItem eventKey={4}>Contact</MenuItem>    
            </LinkContainer> 
            <br />
          </Nav>
    );
  }
}
