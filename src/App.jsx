import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';

import Pages from './pages';

const App = () => (
    <Router>
        <ErrorBoundary>
            <Header />
            <Pages />
        </ErrorBoundary>
    </Router>
);

export default App;
