import React, { Component } from 'react';

class Reset extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick = () => {
        this.props.resetTime();
    }

    render() {
        return (
            <div className="Reset" 
                 onClick={this.handleOnClick}>
                Reset
            </div>
        );
    }
}

export default Reset;