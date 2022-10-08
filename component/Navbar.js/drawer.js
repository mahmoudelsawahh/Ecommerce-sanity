import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import {  Button, IconButton } from '@mui/material';
import { Box, Divider, Drawer} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useStyles from '../../utils/style';
import { useDispatch, useSelector } from 'react-redux';
import { CloseNavbar } from '../../Redux/navbarSlice';
import { UrlFor } from '../../lib/client';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { BoxItem, uniqueCart } from '../../Redux/productSlice';
 const  MenuDrawer= () => {
    const [quantity , setQuantity] = useState(1);
    const classes = useStyles();
    const drawerNavbar = useSelector((state)=>state.NavbarSlice.navbar);
    const uniqueCartState = useSelector((state)=>state.ProductBoxSlice.uniqueData);

    const dispatch = useDispatch();
    const removeItem = async(ele)=>{
       const data = uniqueCartState.filter((item)=>{
          return item._id !== ele._id
        })
         dispatch(uniqueCart(data))
        }

  return (
    
    <Box sx={{width : {md : '650px' , xs : '100%'}}}>
                 <Box sx={{display : 'flex' , alignItems : 'center' , justifyContent : 'space-between' , padding : '8px'}}>
                  <Box sx={{display : 'flex' , alignItems : 'center'}}>
                  <IconButton onClick={()=> dispatch(CloseNavbar(!drawerNavbar))}> <NavigateBeforeIcon /> </IconButton>
                  <Typography fontSize={'15px'} fontWeight={'bold'}>Your Cart <span style={{color : 'red'}}>( {uniqueCartState.length} item)</span> </Typography>
                  </Box>
                <IconButton onClick={()=> dispatch(CloseNavbar(!drawerNavbar))} sx={{color : 'red'}}> <CloseIcon/> </IconButton>
                 </Box>
                <Divider />
                {uniqueCartState.map((ele , index)=>{
                  return(
                    <Box sx={{display : 'flex' , padding : '20px 40px'}}>
                    <Box sx={{backgroundColor : '#eee' , marginRight : '35px'}}> 
                    <img width={'150px'} height={'150px'}  src={UrlFor(ele.image[index].asset._ref)}/>
                    </Box>
                    <Box sx={{display : 'flex' , flexDirection : 'column' , justifyContent : 'space-between' , width : '100%'}}>
                    <Box sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center'}}>
                    <Typography variant='h5' fontWeight={'bold'} sx={{color : '#2b2e5f'}}>{ele.name}</Typography>
                      <Typography variant='h5' fontWeight={'bold'} sx={{color : '#2b2e5f'}}>${ele.price}</Typography>
                    </Box>
                      <Box>
                      
                       <Box className={classes.quantityTable} sx={{justifyContent : 'space-between'}}>
                         <Box className={classes.tableContent}>
                         <IconButton sx={{borderRight : '1px solid #000' , borderRadius : '0' , color : 'red'}} disabled={quantity == 1 ? true : false}  onClick={()=> setQuantity(quantity - 1)}><RemoveIcon/></IconButton>
                         <Typography> {quantity} </Typography>
                         <IconButton sx={{borderLeft : '1px solid #000' , borderRadius : '0' , color : 'green'}} disabled={quantity == 10 ? true : false} onClick={()=> setQuantity(quantity + 1)}><AddIcon/></IconButton>
                         </Box>
                         <IconButton onClick={()=>removeItem(ele)}> <RemoveCircleOutlineIcon color='error'/> </IconButton>

                       </Box>
                      </Box>
                    </Box>
                </Box>
                  )
                })}
              {uniqueCartState.length > 0 ?
              <Box sx={{padding : '15px 50px'}}>
                <Box sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : '20px 15px'}}>
                  <Typography variant='h5'>Subtotal</Typography>
                  <Typography variant='h5'>$50</Typography>
                </Box>
              <Button sx={{width : '100%' , padding : '15px 30px' , borderRadius : '40px'}} variant='contained' color='error'>
                <Typography fontWeight={'bold'}>CheckOut</Typography>  
              <ArrowRightAltIcon/>
              </Button>
              </Box>
              :
              <Typography variant='h4' sx={{textAlign : 'center' , color : 'red' , padding : '25px'}}>No item here</Typography>  
            }
              </Box>
  )
}
export default MenuDrawer;