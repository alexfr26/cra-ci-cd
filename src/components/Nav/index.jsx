import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => (
    <nav className={styles.nav}>
        <ul>
            <li>
                <NavLink to="/">Main</NavLink>
            </li>

            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;
