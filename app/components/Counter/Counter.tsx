import { IconButton } from "@mui/material";
import styles from "./counter.module.scss";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCounter } from "@/components/Providers/CounterProvider";

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className={styles.counter}>
      <IconButton color="success" size="small" onClick={increment}>
        <AddIcon />
      </IconButton>
      <span className={styles.label}>{count.toString()}</span>
      <IconButton color="error" size="small" onClick={decrement}>
        <RemoveIcon />
      </IconButton>
    </div>
  );
};
export default Counter;
