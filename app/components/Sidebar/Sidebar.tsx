"use client";

import FilterPrice from "@/components/Filters/FilterPrice";
import styles from "./sidebar.module.scss";
import FilterNewProducts from "@/components/Filters/FilterNewProducts";
import FilterListIcon from "@mui/icons-material/FilterList";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.info}>
        <FilterListIcon />
        <span className={styles.label}>Фильтры</span>
      </div>
      <div className={styles.filterContainer}>
        <FilterPrice />
        <FilterNewProducts />
      </div>
    </div>
  );
};
export default SideBar;
