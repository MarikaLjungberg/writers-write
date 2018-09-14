import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Groups extends Component {

  render() {
    return (
        <div className="groups">
          <h1>Groups</h1>
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
    state: state
  }
);

export default withRouter(connect(mapStateToProps)(Groups));