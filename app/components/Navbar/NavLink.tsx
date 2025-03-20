import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Link as NavLinkProps } from "@/components/Header/header.types";
import { useNavLink } from "@/hooks/useNavLink";
import { SvgIcon } from "@mui/material";
import styles from "./navbar.module.scss";

const NavLink = ({ name, link, after, before }: NavLinkProps) => {
  const pathName = usePathname();
  const { linkClass } = useNavLink(pathName, link);

  return (
    <Link href={link} className={`${styles.link} ${linkClass}`}>
      {before && <SvgIcon component={before} inheritViewBox />}
      {name}
      {after && <SvgIcon component={after} inheritViewBox />}
    </Link>
  );
};
export default NavLink;
