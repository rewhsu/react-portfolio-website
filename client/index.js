import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import routes from './routes';
import Navbar from './components/Navbar';

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      {routes}
    </div>
  </Router>,
  document.getElementById('app')
);