// import { useContext } from "react";
// import StoreProvider from "./StoreProvider";

// describe("counter reducer", () => {
//   const initialState = {
//     value: 3,
//     status: "idle",
//   };
//   it("should handle initial state", () => {
//     expect(StoreProvider(undefined, { type: "unknown" })).toEqual({
//       value: 0,
//       status: "idle",
//     });
//   });

//   it("should handle increment", () => {
//     const actual = StoreProvider(initialState, StoreProvider.increment());
//     console.log("actual", actual)
//     expect(actual.value).toEqual(4);
//   });

//   it("should handle decrement", () => {
//     const actual = StoreProvider(initialState, store.decrement());
//     expect(actual.value).toEqual(2);
//   });

//   it("should handle incrementByAmount", () => {
//     const actual = StoreProvider(initialState, store.incrementByAmount(2));
//     expect(actual.value).toEqual(5);
//   });
// });
