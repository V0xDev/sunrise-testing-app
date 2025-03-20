import Product from "@/components/Product/Product";
import { ProductProps } from "@/components/Product/product.types";
import { Suspense } from "react";

const ProductPage = async ({ params }: { params: Promise<ProductProps> }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Product id={id} />
    </Suspense>
  );
};

export default ProductPage;
