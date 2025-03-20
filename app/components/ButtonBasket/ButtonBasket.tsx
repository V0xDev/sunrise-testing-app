import Counter from "@/components/Counter/Counter";
import { useCounter } from "@/components/Providers/CounterProvider";
import { Button } from "@mui/material";

const ButtonBasket = () => {
  const context = useCounter();

  if (context.count > 0) {
    return <Counter />;
  }

  return (
    <Button onClick={context.increment} variant="text">
      В корзину
    </Button>
  );
};

export default ButtonBasket;
