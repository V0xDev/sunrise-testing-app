import { ProductInfo } from "@/components/Providers/providers.types";
import styles from "./basket.module.scss";

const BasketItem = (product: ProductInfo) => {
  return (
    <div className={styles.product}>
      <span className={styles.name}>Название товара: {product.name}</span>
      <span className={styles.price}>Цена: {product.price}</span>
      <span className={styles.description}>
        Описание: {product.description}
      </span>
    </div>
  );
};
export default BasketItem;
