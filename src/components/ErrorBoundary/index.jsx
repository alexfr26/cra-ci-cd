import { Component } from 'react';

import ErrorMessage from '../ErrorMessage';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) return <ErrorMessage>Something went wrong</ErrorMessage>;

        return children;
    }
}

export default ErrorBoundary;
