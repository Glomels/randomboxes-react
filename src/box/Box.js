import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render(){
        var color = this.props.color;
        return (
            <div className="box" style={{background: color}}>
            </div>
        );
    }
}

export default Box;