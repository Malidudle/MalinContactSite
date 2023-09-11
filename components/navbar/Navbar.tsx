import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.link} href="/">
          Contact Me
        </Link>
        <Link className={styles.link} href="/about-me">
          More About Me
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
