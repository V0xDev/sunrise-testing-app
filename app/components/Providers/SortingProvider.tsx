"use client";

import { SORT } from "@/components/Filters/filters.constants";
import { SortType } from "@/components/Filters/filters.types";
import { ProductKeys } from "@/store/database.types";
import { Optional } from "@/types/types";
import { GridSortModel } from "@mui/x-data-grid";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type SortingProviderType = {
  sortingIsNew: boolean;
  setSortNewProduct: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortingPrice: Optional<SortType>;
  setSortPrice: (sort: SortType) => void;
  sortModel: GridSortModel;
  setSortModel: Dispatch<SetStateAction<GridSortModel>>;
};

const SortingContext = createContext<Optional<SortingProviderType>>(undefined);

function SortingProvider({ children }: { children: ReactNode }) {
  const [sortingPrice, setSortingPrice] = useState<Optional<SortType>>(
    SORT.default
  );

  const [sortingIsNew, setSortingIsNew] = useState(false);

  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: "price",
      sort: null,
    },
  ]);

  const setSorting = (fieldName: ProductKeys, sortType: SortType) => {
    let sort: SortType;

    switch (sortType) {
      case SORT.asc:
        sort = SORT.asc;
        break;

      case SORT.desc:
        sort = SORT.desc;
        break;

      default:
        sort = undefined;
    }

    setSortModel([{ field: fieldName, sort: sort }]);
  };

  const setSortPrice = (sort: SortType) => {
    setSortingPrice(sort);
    setSorting("price", sort);
  };

  const setSortNewProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortingIsNew(event.target.checked);
    setSorting("isNew", sortingIsNew ? "desc" : "asc");
  };

  const provide: SortingProviderType = {
    sortingIsNew,
    setSortNewProduct,
    sortingPrice,
    setSortPrice,
    sortModel,
    setSortModel,
  };

  return (
    <SortingContext.Provider value={provide}>
      {children}
    </SortingContext.Provider>
  );
}

function useSort() {
  const context = useContext(SortingContext);
  if (!context) {
    throw new Error("Products context is not provided!");
  }
  return context;
}

export { useSort, SortingProvider };
