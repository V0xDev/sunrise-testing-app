import styles from "./basket-page.module.scss";
import BasketContent from "@/components/Basket/BasketContent";

const BasketPage = () => {
  return (
    <div className={styles.wrapperPage}>
      <BasketContent />
    </div>
  );
};
export default BasketPage;
