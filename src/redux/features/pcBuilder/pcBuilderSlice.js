import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cpu: [],
  motherboard: [],
  ram: [],
  powerSupply: [],
  storage: [],
  monitor: [],
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addToCategory: (state, action) => {
      const { category, product } = action.payload;
      state[category].push(product);
    },
  }
  // reducers: {
  //   pcBuilder: (state, action) => {
  //     const product = action.payload;
  //     if (!state.products.find((p) => p._id === product._id)) {
  //       state.products.push(product);
  //     }
  //   },
  // },
});

export const { addToCategory } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
