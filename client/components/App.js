import React from 'react';
import Navbar from './Navbar';
import ImageCarousel from './ImageCarousel';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageCarousel />
      </div>
    )
  }
}
