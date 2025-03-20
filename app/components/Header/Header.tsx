"use client";
import NavList from "@/components/Navbar/NavList";
import styles from "./header.module.scss";
import { LINKS } from "@/components/Header/header.constants";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavList links={LINKS} />
      </nav>
    </header>
  );
};
export default Header;
