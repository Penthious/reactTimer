import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div className="Time">
                <span>{this.props.minutes}</span>
                <span>:</span>
                <span>{this.props.seconds}</span>
                <span>:</span>
                <span>{this.props.milliseconds}</span>
            </div>
        );
    }
}

export default Time;