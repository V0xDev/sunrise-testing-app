import { useBasket } from "@/components/Providers/BasketProvider";
import { Product } from "@/store/database.types";
import { Optional } from "@/types/types";
import { createContext, ReactNode, use } from "react";

interface BasketProviderContext {
  count: number;
  increment: () => void;
  decrement: () => void;
}

interface CounterProviderProps {
  children: ReactNode;
  id: number;
  product: Product;
}

const CounterContext =
  createContext<Optional<BasketProviderContext>>(undefined);

function CounterProvider({ children, id, product }: CounterProviderProps) {
  const { basketList, addToBasket, removeToBasket } = useBasket();

  const count = basketList.get(id)?.count ?? 0;

  const increment = () => {
    const newCount = count + 1;
    addToBasket(id, { ...product, count: newCount });
  };

  const decrement = () => {
    const newCount = count - 1;
    if (newCount > 0) {
      addToBasket(id, { ...product, count: newCount });
      return;
    }

    removeToBasket(id);
  };

  const provide: BasketProviderContext = {
    count,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={provide}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounter() {
  const context = use(CounterContext);

  if (!context) {
    throw new Error("Counter context is not provided!");
  }

  return context;
}

export { useCounter, CounterContext, CounterProvider };
