import { configureStore } from '@reduxjs/toolkit'
import NavbarSlice  from './navbarSlice'
import ProductBoxSlice from './productSlice'
 const Store = configureStore({
  reducer: {
    NavbarSlice,
    ProductBoxSlice,
    
  },
})
 export default Store