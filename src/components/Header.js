import React from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';

const Header = () => {
    return (
        <div className="Header">
            <Jumbotron>
                <Grid>
                    <div className="header-text">
                        <h1>Writers Write</h1>
                        <h2>... if only a little every day</h2>
                    </div>
                </Grid>
            </Jumbotron>
      </div>
    );
}

export default Header;