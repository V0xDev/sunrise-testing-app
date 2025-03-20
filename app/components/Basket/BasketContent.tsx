"use client";

import styles from "./basket.module.scss";
import { useBasket } from "@/components/Providers/BasketProvider";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BasketList from "@/components/Basket/BasketList";
import BasketPrice from "@/components/Basket/BasketPrice";

const BasketContent = () => {
  const { getBasketProducts, getBasketTotalPrice } = useBasket();

  return (
    <div className={styles.basket}>
      <Link className={styles.link} href="/">
        <ArrowBackIcon />
        Назад
      </Link>

      <BasketList products={getBasketProducts} />
      <BasketPrice totalPrice={getBasketTotalPrice} />
    </div>
  );
};
export default BasketContent;
