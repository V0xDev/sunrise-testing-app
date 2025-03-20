import { useProducts } from "@/components/Providers/ProductsProvider";
import { Product } from "@/store/database.types";
import { useCallback } from "react";

function useProductApi() {
  const { products, addProduct } = useProducts();

  const listProducts = useCallback(async (): Promise<Product[]> => {
    return [...products];
  }, [products]);

  const createProduct = useCallback(
    async (product: Product): Promise<void> => {
      return addProduct(product);
    },
    [addProduct]
  );

  const deleteProduct = useCallback(
    async (id: number): Promise<void> => {
      const index = products.findIndex((p) => p.id === id);
      if (index !== -1) products.splice(index, 1);
    },
    [products]
  );

  const updateProduct = useCallback(
    async (id: number, product: Product): Promise<void> => {
      const index = products.findIndex((p) => p.id === id);
      if (index !== -1) products[index] = product;
    },
    [products]
  );

  return { listProducts, createProduct, deleteProduct, updateProduct };
}

export { useProductApi };
