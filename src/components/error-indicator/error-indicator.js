import React, { Component } from 'react';
import './error-indicator.css'

class ErrorIndicator extends Component {
    render() {
        return (
            <div className="error-indicator">
              <h2>OOPS!</h2>
              <h4>Something is wrong!</h4>  
            </div>
        );
    }
}

export default ErrorIndicator;