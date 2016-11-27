import React, { Component } from 'react';

import Time from './Time';
import StartStop from './StartStop';
import Reset from './Reset';
import "../styles/timer.sass";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            start:  false,
            minutes: "01",
            seconds: "01",
            milliseconds: "01"
        }
    }

    resetTime = () => {
        
        this.setState({
            minutes: "00",
            seconds: "00",
            milliseconds: "00"
        });
        
    }


    render() {
        return (
            <div className="Timer">

                <Time {...this.state} />

                <div className="button-box">
                    <StartStop />
                    <Reset resetTime={this.resetTime}/>
                </div>

            </div>
        );
    }
}

export default Timer;