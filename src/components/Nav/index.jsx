import NavLink from '../NavLink';

import styles from './Nav.module.css';

const Nav = () => (
    <nav className={styles.nav}>
        <ul>
            <li>
                <NavLink to="/">Main</NavLink>
            </li>

            <li>
                <NavLink to="/users">Users</NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;
