import React from 'react';

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        {this.props.match.params.id ? 
          <h3>Project ID: {this.props.match.params.id}</h3>
          : <h3>Viewing All Projects</h3>}
      </div>
    )
  }
}