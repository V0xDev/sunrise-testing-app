import styles from "./basket.module.scss";

interface BasketPriceProps {
  totalPrice: number;
}

const BasketPrice = ({ totalPrice }: BasketPriceProps) => {
  if (totalPrice === 0) {
    return null;
  }

  return (
    <div className={styles.allPrice}>
      <span>Итого:</span>
      <span>{totalPrice}</span>
    </div>
  );
};
export default BasketPrice;
