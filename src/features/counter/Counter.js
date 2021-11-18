import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { StoreContext } from "../../app/StoreProvider";
import styles from "./Counter.module.css";

const Counter = () => {
  const store = useContext(StoreContext);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={store.decrement}
        >
          -
        </button>
        <span className={styles.value}>{store.value}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={store.increment}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => store.incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => store.incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => store.incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};

export default observer(Counter);
