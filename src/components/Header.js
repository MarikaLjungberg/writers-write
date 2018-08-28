import React from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';

const Header = () => {
    return (
        <div className="Header">
            <Jumbotron>
                <Grid>
                    <div className="row header-text">
                        <h1 className="col-12">Writers Write</h1>
                        <h2 className="col-xs-12 col-md-8">... if only a little every day</h2>
                    </div>
                </Grid>
            </Jumbotron>
      </div>
    );
}

export default Header;