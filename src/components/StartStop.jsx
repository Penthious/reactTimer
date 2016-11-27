import React, { Component } from 'react';

class StartStop extends Component {
    handleOnClick() {
        
    }
    render() {
        return (
            <div className="StartStop" onClick={this.handleOnClick}>
                Start
            </div>
        );
    }
}

export default StartStop;