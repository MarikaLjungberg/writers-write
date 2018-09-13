import React from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import NavigationPostit from './NavigationPostit.js';

const Header = () => {
    return (
        <div className="Header">
            <Jumbotron>
                <Grid>
                  <Link to='/'>
                    <div className="row header-text">
                      <h1 className="col-12">Writers Write</h1>
                      <h2 className="col-xs-12 col-md-8">... if only a little every day</h2>
                    </div>
                  </Link>
                </Grid>
            </Jumbotron>
            <div className="row justify-content-center align-items-start navbar">
                <NavLink activeClassName='active' className="col-3" to='/customizeExercises'><NavigationPostit routeTo="Customize Exercises"/></NavLink>
                <NavLink activeClassName='active' className="col-3" to='/agenda'><NavigationPostit routeTo="Agenda"/></NavLink>
                <NavLink activeClassName='active' className="col-3" to='/groups'><NavigationPostit routeTo="Groups"/></NavLink>
                <NavLink activeClassName='active' className="col-3" to='/inspo'><NavigationPostit routeTo="Inspo"/></NavLink>
            </div>
      </div>
    );
}

export default Header;