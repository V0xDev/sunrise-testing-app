"use client";

import { FormControlLabel, Switch } from "@mui/material";
import styles from "./filters.module.scss";
import { useSort } from "@/components/Providers/SortingProvider";

const FilterNewProducts = () => {
  const { sortingIsNew, setSortNewProduct } = useSort();

  return (
    <FormControlLabel
      sx={{ margin: 0, width: "100%" }}
      control={
        <Switch
          size="medium"
          checked={sortingIsNew}
          onChange={setSortNewProduct}
        />
      }
      className={styles.filterNewProducts}
      label="Только новые товары"
    />
  );
};
export default FilterNewProducts;
