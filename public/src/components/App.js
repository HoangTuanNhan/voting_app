import React from 'react';
import { Component } from 'react';
import '../../css/style.css';

export default class App extends Component {
    componentWillMount() {
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
