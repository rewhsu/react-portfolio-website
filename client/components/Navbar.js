import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class Navbar extends React.Component {
  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }
  render() {
    return (
      <Nav bsStyle="tabs" activeKey={1} onSelect={(a) => this.handleSelect(a)}>
        <NavItem eventKey={1} title="Home" href="/">Home</NavItem>
        <NavItem eventKey={2} title="About" href="/about">About</NavItem>
        <NavItem eventKey={3} title="Portfolio" href="/portfolio">Portfolio</NavItem>
        <NavItem eventKey={4} title="Contact" href="/contact" disabled>Contact</NavItem>
      </Nav>
    )
  }
}