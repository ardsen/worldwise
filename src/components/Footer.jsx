import styles from "./Footer.modules.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}></p>
      &copy; Copyright {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
