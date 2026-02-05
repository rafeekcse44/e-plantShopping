import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const payload = action.payload;
      const existing = state.items.find(i => i.id === payload.id);
      const qtyToAdd = payload.quantity && Number(payload.quantity) > 0 ? Number(payload.quantity) : 1;
      if (existing) {
        existing.quantity = (existing.quantity || 0) + qtyToAdd;
      } else {
        state.items.push({ ...payload, quantity: qtyToAdd });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (!item) return;
      const q = Number(quantity);
      if (Number.isNaN(q) || q <= 0) {
        state.items = state.items.filter(i => i.id !== id);
      } else {
        item.quantity = q;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
