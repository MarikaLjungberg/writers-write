import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPostit = (props) => {
    return (
        <div className="navigationPostit">
            <span>{props.routeTo}</span>
      </div>
    );
}

export default NavigationPostit;