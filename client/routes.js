import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Login from './components/Login';

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/projects/:id" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path="/login" component={Login} />
    <Route path="/*" component={NotFound} />
  </Switch>
)