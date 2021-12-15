import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorMessage from './components/ErrorMessage';
import Main from './pages/Main';
import Profile from './pages/Profile';

import Header from './components/Header';

import styles from './styles/Header.module.css';

import AtomSvg from './assets/atom.svg';
import svgPath from './assets/old-republic.svg';

{
    /* <div>
    <h1 className={styles.error}>HELLO, FIRST COMPONENT!</h1>
    <AtomSvg className={styles.svg} fill="#90caf9" />
    <img src={svgPath} alt="" />
    <h2 className={styles.success}>Another styles</h2>
</div> */
}

const App = () => (
    <Router>
        <Header />
        <ErrorMessage />
        <AtomSvg className={styles.svg} fill="#90caf9" />

        <hr />

        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Main />} />
        </Routes>
    </Router>
);

export default App;
