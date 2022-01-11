import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from '../Context/Provider';
import RoutesPrivate from './Private';
import Home from './Home/Home';
import LoginForm from './LoginForm';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
    <Switch>
      <Route path="/" component={LoginForm} />
      <RoutesPrivate path="/" component={Home}/>
    </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;