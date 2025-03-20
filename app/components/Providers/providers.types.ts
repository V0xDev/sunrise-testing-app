import { Product } from "@/store/database.types";

export type ProductInfo = Product & {
  count: number;
};
