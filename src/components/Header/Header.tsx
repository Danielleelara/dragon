import styles from "./Header.module.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <Link to={"/dragons-list"} className={styles.link}>
        Home
      </Link>
    </header>
  );
};

export default Header;
