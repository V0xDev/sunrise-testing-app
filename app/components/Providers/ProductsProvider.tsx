"use client";

import { PRODUCTS } from "@/store/database";
import { Product } from "@/store/database.types";
import { Optional } from "@/types/types";
import { createContext, ReactNode, useContext, useState } from "react";

type ProductsProviderType = {
  products: Product[];
  addProduct: (product: Product) => void;
};

const ProductsContext =
  createContext<Optional<ProductsProviderType>>(undefined);

function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const provide: ProductsProviderType = {
    products,
    addProduct,
  };

  return (
    <ProductsContext.Provider value={provide}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("Products context is not provided!");
  }
  return context;
}

export { useProducts, ProductsProvider };
