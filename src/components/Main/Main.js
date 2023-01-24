import React from 'react';
import { Route, BrowserRouter, Switch, Link, Redirect } from 'react-router-dom';
import Colors from '../Colors/Colors.js';
import NotFound from '../NotFound.js';
import './Main.css';

export default function Main() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='link-container'>
          <Link to='/255/172/228' style={{ textDecoration: 'none' }} >
            <h1 className='pink'>PINK</h1>
          </Link>
          <Link to='/171/135/255' style={{ textDecoration: 'none' }} >
            <h1 className='purple'>PURPLE</h1>
          </Link>
          <Link to='/171/255/255' style={{ textDecoration: 'none' }} >
            <h1 className='blue'>BLUE</h1>
          </Link>
        </div>
        <Switch>
          <Route exact path="/" >
            <Redirect to="/171/255/255" />
          </Route>
          <Route path='/:r/:g/:b' component={Colors} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
