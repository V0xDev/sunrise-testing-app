export interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  description: string;
  isNew: boolean;
}

export type ProductKeys = keyof Product;
