import { createSlice } from '@reduxjs/toolkit'
export const ProductBoxSlice = createSlice({
    name: 'product',
    initialState : {
      items : [],
      uniqueData : [],
    },
    reducers: {
      BoxItem : (state , action)=>{
            state.items.push(action.payload)
     },
     uniqueCart : (state , action)=>{
      state.uniqueData = action.payload
     },
     dataUpdate : (state , action)=>{
      state.dataUpdate = action.payload
     },
    },
  })
  
  export const { BoxItem , uniqueCart } = ProductBoxSlice.actions
  
  export default ProductBoxSlice.reducer