import { Product } from "@/store/database.types";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Смартфон Galaxy S23",
    price: 59990,
    brand: "Samsung",
    description: "Мощный смартфон с AMOLED-экраном и камерой 50 МП.",
    isNew: true,
  },
  {
    id: 2,
    name: "Ноутбук XPS 13",
    price: 129900,
    brand: "Dell",
    description: "Компактный ноутбук с процессором Intel i7 и 16 ГБ ОЗУ.",
    isNew: false,
  },
  {
    id: 3,
    name: "Наушники AirPods Pro",
    price: 24990,
    brand: "Apple",
    description: "Беспроводные наушники с шумоподавлением.",
    isNew: false,
  },
  {
    id: 4,
    name: "Телевизор OLED55CX",
    price: 99900,
    brand: "LG",
    description: "55-дюймовый OLED-телевизор с 4K разрешением.",
    isNew: true,
  },
  {
    id: 5,
    name: "Кофемашина Nespresso",
    price: 15990,
    brand: "Nespresso",
    description: "Компактная кофемашина для капсул.",
    isNew: false,
  },
  {
    id: 6,
    name: "Планшет iPad Air",
    price: 54990,
    brand: "Apple",
    description: "Легкий планшет с Retina-дисплеем.",
    isNew: true,
  },
  {
    id: 7,
    name: "Умные часы Watch 7",
    price: 34990,
    brand: "Samsung",
    description: "Часы с функцией измерения пульса и сна.",
    isNew: false,
  },
  {
    id: 8,
    name: "Игровая мышь G502",
    price: 6990,
    brand: "Logitech",
    description: "Эргономичная мышь с настраиваемой подсветкой.",
    isNew: false,
  },
  {
    id: 9,
    name: "Колонка HomePod Mini",
    price: 12990,
    brand: "Apple",
    description: "Компактная умная колонка с Siri.",
    isNew: true,
  },
  {
    id: 10,
    name: "Монитор UltraWide 34",
    price: 39990,
    brand: "LG",
    description: "34-дюймовый монитор с разрешением 3440x1440.",
    isNew: false,
  },
];

export { PRODUCTS };
