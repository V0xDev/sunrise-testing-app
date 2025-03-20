"use client";

import { FILTER_PRICE_ARRAY } from "@/components/Filters/filter-price.constants";
import { SortType } from "@/components/Filters/filters.types";
import { useSort } from "@/components/Providers/SortingProvider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const FilterPrice = () => {
  const { sortingPrice, setSortPrice } = useSort();

  const handleChange = (event: SelectChangeEvent) => {
    setSortPrice(event.target.value as SortType);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="filter-price-label">Цена</InputLabel>
      <Select
        sx={{ borderRadius: "8px" }}
        MenuProps={{
          disableScrollLock: true,
        }}
        labelId="filter-price-label"
        id="filter-price-select"
        value={sortingPrice}
        label="Цена"
        onChange={handleChange}
      >
        <MenuItem value={"default"} key={"default-value"}>
          По умолчанию
        </MenuItem>
        {FILTER_PRICE_ARRAY.map((item) => (
          <MenuItem value={item.state} key={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default FilterPrice;
