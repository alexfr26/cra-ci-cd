import styles from './Main.module.css';

import Heading from '../../components/Heading';
import AtomSvg from '../../assets/atom.svg';

const Main = () => (
    <>
        <Heading>React</Heading>
        <AtomSvg className={styles.atomSvg} fill="#90caf9" />
    </>
);

export default Main;
