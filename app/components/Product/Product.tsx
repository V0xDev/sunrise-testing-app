import { PRODUCTS } from "@/store/database";
import { notFound } from "next/navigation";
import styles from "./product.module.scss";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface ProductProps {
  id: string;
}

async function Product({ id }: ProductProps) {
  const product = PRODUCTS.find((product) => product.id === parseInt(id));

  if (!product) {
    return notFound();
  }

  return (
    <div className={styles.product}>
      <Link className={styles.link} href="/">
        <ArrowBackIcon />
        Назад
      </Link>

      <div className={styles.product}>
        <span className={styles.name}>Название товара: {product.name}</span>
        <span className={styles.price}>Цена: {product.price}</span>
        <span className={styles.description}>
          Описание: {product.description}
        </span>
      </div>
    </div>
  );
}

export default Product;
