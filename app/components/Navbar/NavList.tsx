import styles from "./navbar.module.scss";
import NavLink from "@/components/Navbar/NavLink";
import { NavListProps } from "@/components/Navbar/navbar.types";

const NavList = ({ links }: NavListProps) => {
  return (
    <ul className={styles.navList}>
      {links.map((link) => (
        <NavLink {...link} key={link.name} />
      ))}
    </ul>
  );
};
export default NavList;
