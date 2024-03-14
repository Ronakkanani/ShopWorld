import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/cartSlice'

export const store = configureStore({
    reducer: {
        cart: counterReducer,
  },
})