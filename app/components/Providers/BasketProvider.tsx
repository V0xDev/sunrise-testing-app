"use client";

import { ProductInfo } from "@/components/Providers/providers.types";
import { Optional } from "@/types/types";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type ProductListType = Map<number, ProductInfo>;

type BasketProviderType = {
  basketList: ProductListType;
  getBasketProducts: ProductInfo[];
  getBasketTotalPrice: number;
  addToBasket: (productId: number, product: ProductInfo) => void;
  removeToBasket: (productId: number) => void;
};

const BasketContext = createContext<Optional<BasketProviderType>>(undefined);

function BasketProvider({ children }: { children: ReactNode }) {
  const [basketList, setBasketList] = useState<ProductListType>(new Map());

  const addToBasket = (productId: number, product: ProductInfo) => {
    setBasketList((prev) => {
      const newMap = new Map(prev);
      newMap.set(productId, product);
      return newMap;
    });
  };

  const removeToBasket = (productId: number) => {
    setBasketList((prev) => {
      const newMap = new Map(prev);
      newMap.delete(productId);
      return newMap;
    });
  };

  const getBasketProducts = useMemo(
    () => Array.from(basketList.values()),
    [basketList]
  );

  const getBasketTotalPrice = useMemo(
    () =>
      Array.from(basketList.values()).reduce(
        (total, item) => total + item.price,
        0
      ),
    [basketList]
  );

  const provide: BasketProviderType = {
    basketList,
    getBasketProducts,
    getBasketTotalPrice,
    addToBasket,
    removeToBasket,
  };

  return (
    <BasketContext.Provider value={provide}>{children}</BasketContext.Provider>
  );
}

function useBasket() {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("Basket context is not provided!");
  }
  return context;
}

export { useBasket, BasketProvider };
