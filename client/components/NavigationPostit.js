import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPostit = (props) => {
    return (
      <div className="navigationPostit">
          <img src="../static/img/postit-3265087_1920.png" alt="Post-it"></img>
          <span className="centeredText">{props.routeTo}</span>
      </div>
    );
}

export default NavigationPostit;