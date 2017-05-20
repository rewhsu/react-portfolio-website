import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class Navbar extends React.Component {
  handleSelect() {
    alert('selected ' + selectedKey);
  }
  render() {
    return (
      <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
      </Nav>
    )
  }
}