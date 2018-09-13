import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Inspo extends Component {

  render() {
    return (
        <div className="inspo">
          <h1>Inspo</h1>
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
    state: state
  }
);

export default withRouter(connect(mapStateToProps)(Inspo));