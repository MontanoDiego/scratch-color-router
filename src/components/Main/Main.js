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
          <Link to='/255/0/0'>
            <h1>RED</h1>
          </Link>
          <Link to='/0/255/0'>
            <h1>GREEN</h1>
          </Link>
          <Link to='/0/0/255'>
            <h1>BLUE</h1>
          </Link>
        </div>
        <Switch>
          <Route exact path="/" >
            <Redirect to="/255/0/0" />
          </Route>
          <Route path='/:r/:g/:b' component={Colors} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
