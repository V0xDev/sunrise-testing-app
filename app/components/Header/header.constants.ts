import { Link } from "@/components/Header/header.types";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const LINKS: Link[] = [
  { link: "/", name: "Все товары" },
  { link: "/basket", name: "Корзина", after: ShoppingBasketIcon },
];
