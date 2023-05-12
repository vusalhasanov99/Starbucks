import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
     products: JSON.parse(localStorage.getItem('basket')) || []
  },
  reducers: {
    addToBasket: (state, action) => {
      const { id,name,img } = action.payload;
      const existingProduct = state.products.find(product => product.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ id, quantity: 1 ,name,img});
      }
      localStorage.setItem('basket', JSON.stringify(state.products));
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.products.find(product => product.id === id);
      
      if (existingProduct) {
        existingProduct.quantity += 1;
        localStorage.setItem('basket', JSON.stringify(state.products));
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.products.find(product => product.id === id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.products = state.products.filter(product => product.id !== id);
        } else {
          existingProduct.quantity -= 1;
        }
        localStorage.setItem('basket', JSON.stringify(state.products));
      }
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter(product => product.id !== id);
      localStorage.setItem('basket', JSON.stringify(state.products));
    },
    removeAllProducts: (state) => {
      state.products = [];
      localStorage.removeItem('basket');
    }
  }
});


export const { addToBasket, increaseQuantity, decreaseQuantity,removeProduct, removeAllProducts } = basketSlice.actions;
export default basketSlice.reducer;