import React, { Component } from 'react';

class StartStop extends Component {
    constructor(props){
        super(props);
    }

    handleOnClick = () => {
        this.props.startStop();
    };

    render() {
        return (
            <div className="StartStop" onClick={this.handleOnClick}>
                {this.props.start ? "Stop" : "Start"}
            </div>
        );
    }
}

export default StartStop;