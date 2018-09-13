import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Agenda extends Component {

  render() {
    return (
        <div className="agenda">
          <h1>Agenda</h1>
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
    state: state
  }
);

export default withRouter(connect(mapStateToProps)(Agenda));