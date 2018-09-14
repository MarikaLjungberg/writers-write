import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class CustomizeExercises extends Component {

  render() {
    return (
        <div className="customizeExercises">
          <h1>Customize Exercises</h1>
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
    state: state
  }
);

export default withRouter(connect(mapStateToProps)(CustomizeExercises));