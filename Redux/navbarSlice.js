import { createSlice } from '@reduxjs/toolkit'
export const NavbarSlice = createSlice({
    name: 'navbar',
    initialState : {
      navbar : false
    },
    reducers: {
      CloseNavbar : (state , action)=>{
        state.navbar = action.payload
     },
    },
  })
  
  export const { CloseNavbar  } = NavbarSlice.actions
  
  export default NavbarSlice.reducer