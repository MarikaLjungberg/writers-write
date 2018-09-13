import React from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                <Link className="col-3" to='/customizeExercises'><NavigationPostit routeTo="Customize Exercises"/></Link>
                <Link className="col-3" to='/agenda'><NavigationPostit routeTo="Agenda"/></Link>
                <Link className="col-3" to='/groups'><NavigationPostit routeTo="Groups"/></Link>
                <Link className="col-3" to='/inspo'><NavigationPostit routeTo="Inspo"/></Link>
            </div>
      </div>
    );
}

export default Header;