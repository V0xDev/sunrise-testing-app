import styles from "@/components/Navbar/navbar.module.scss";
import { useMemo } from "react";

export function useNavLink(pathName: string, link: string) {
  const isActive = pathName === link;

  const linkClass = useMemo(() => {
    return isActive ? styles.activeLink : undefined;
  }, [isActive]);

  return { linkClass };
}
