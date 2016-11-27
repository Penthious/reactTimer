import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './components/Timer';

export default class App extends React.Component {
    render() {
        return (
            <Timer />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))