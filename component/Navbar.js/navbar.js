import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useStyles from '../../utils/style';
import { Badge} from '@mui/material';
import { Box, Drawer} from '@mui/material';
import MenuDrawer from './drawer';
import { useDispatch, useSelector } from 'react-redux';
import { CloseNavbar } from '../../Redux/navbarSlice';
import Link from 'next/link';
import { BoxItem, uniqueCart } from '../../Redux/productSlice';
 const Navbar = ()=> {
    const classes = useStyles();
    const drawerNavbar = useSelector((state)=>state.NavbarSlice.navbar);
    const stateCart = useSelector((state)=>state.ProductBoxSlice.items);
    const [cart , setCart] = useState(0)
    const dispatch = useDispatch();
    useEffect(()=>{
      const data = new Set(stateCart);
      const result = [...data];
       dispatch(uniqueCart(result))
       setCart(result.length)
    },)

  return (
    <Box className={classes.navbar} >
      <Link href={'/'}>
      <Typography variant='h5'>amazon</Typography>
     </Link>
     <Badge sx={{cursor : 'pointer'}} badgeContent={cart} color="error" onClick={()=> dispatch(CloseNavbar(!drawerNavbar))}>
      <AddShoppingCartIcon/>
     </Badge>

     <Drawer anchor='right' open={drawerNavbar} onClose={() => dispatch(CloseNavbar(!drawerNavbar))} >
             <MenuDrawer/>
            </Drawer>
    </Box>
  );
}
export default Navbar;