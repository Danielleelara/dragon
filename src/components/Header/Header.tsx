import styles from './Header.module.css';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      {/* <nav> */}
        <Link to={'/dragons-list'} className={styles.link}>Home</Link>
      {/* </nav> */}
    </header>
  );
};

export default Header;