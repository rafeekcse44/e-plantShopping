import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, increaseQty, decreaseQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
