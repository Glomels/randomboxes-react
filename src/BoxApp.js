import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Box from './box/Box';
import './BoxApp.css';

class BoxApp extends Component {

    constructor(props){
        super(props);
        this.boxes = [];

        for (let i = 0; i < 36; i++){
            this.boxes[i] = this.randomHexColor();
            while (this.boxes[i] === this.boxes[i-1]){
                this.boxes[i] = this.randomHexColor();
            }
        }

        this.state = {boxes: this.boxes};

        setInterval(() => {
            let randomInt = Math.floor(Math.random() * this.boxes.length-1);
            this.boxes[randomInt] = this.randomHexColor();
            this.setState({boxes: this.boxes});
        }, 100);
    }

    randomHexColor(){
        var hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        var isOk  = /^#[0-9A-F]{6}$/i.test(hex);
        return isOk ? hex : this.randomHexColor();
    }

    render(){
        const boxes = this.state.boxes;
        return (
            <div className="BoxApp">   
                <Navbar />
                {boxes.map((color, i) => {
                    return (
                    <Box key={i} color={color} />
                    );
                })}
            </div>
        );
    }
}

export default BoxApp;