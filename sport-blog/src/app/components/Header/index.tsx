import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <h1 className={styles.logo}>
          <Link href="/">BlogSport</Link>
        </h1>

        <nav className={styles.header_nav}>
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;