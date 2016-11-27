import React, { Component, PropTypes } from 'react';

class StartStop extends Component {
    handleOnClick = () => {
        this.props.startStop();
    };

    render() {
        return (
            <div className="StartStop">
                <button onClick={this.handleOnClick}>
                    {this.props.start ? 'Stop' : 'Start'}
                </button>

            </div>
        );
    }
}

StartStop.propTypes = {
    startStop: PropTypes.func.isRequired,
    start: PropTypes.bool.isRequired,
};

export default StartStop;
