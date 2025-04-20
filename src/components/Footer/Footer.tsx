import styles from "./Footer.module.css";

const Footer = () => {
    return (
      <footer className={styles.footer}>
          © 2025 Copyright:{" "}
          <a href="https://github.com/Danielleelara">
           Github - Danielle de Souza
          </a>
      </footer>
    );
  };
  
  export default Footer;