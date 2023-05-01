import React, { Component } from 'react';

class ErorrBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Sorry, there was an error.</h1>
        }
        return this.props.children
    }
}

export default ErorrBoundary;