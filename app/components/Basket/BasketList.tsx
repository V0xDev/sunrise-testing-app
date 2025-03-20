import BasketItem from "@/components/Basket/BasketItem";
import { ProductInfo } from "@/components/Providers/providers.types";
import styles from "./basket.module.scss";

const BasketList = ({ products }: { products: ProductInfo[] }) => {
  if (products.length === 0) {
    return (
      <span className={styles.label}>
        Корзина товаров пуста, добавьте сюда товары и возвращайтесь позднее...
      </span>
    );
  }

  return (
    <>
      <span className={styles.label}>Корзина:</span>
      {products.map((product) => (
        <BasketItem {...product} key={product.id} />
      ))}
    </>
  );
};
export default BasketList;
