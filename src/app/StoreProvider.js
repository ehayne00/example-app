import React, { createContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { fetchCount } from "../features/counter/counterAPI";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    value: 0,
    status: "idle",

    increment: () => {
      store.value += 1;
    },
    decrement: () => {
      store.value -= 1;
    },
    incrementByAmount: (amount) => {
      store.value += amount;
    },

    incrementIfOdd: (amount) => {
      if (store.value % 2 === 1) {
        store.incrementByAmount(amount);
      }
    },

    incrementAsync: async (amount) => {
      const response = await fetchCount(amount);
      console.log("resp", response);
      store.value += response.data;
    },
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
