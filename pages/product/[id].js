import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { client, UrlFor } from '../../lib/client';
import useStyles from '../../utils/style';
import { Box, Button, IconButton, Rating, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../../component/Navbar.js/navbar';
import { BoxItem } from '../../Redux/productSlice';

 const ProductItem = ({product , banner}) => {
  const [quantity , setQuantity] = useState(1);
  const [index , setIndex] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch()
  const router = useRouter();
  const query = router.query.id
  const filterProduct = product.filter((ele)=>{
    return ele.slug.current === query
  })

   const ImageProduct = filterProduct.map((ele)=>{
    return ele.image.map((item , i)=>{
      const imgItem = item.asset._ref;
      return (
            <Box className={`${classes.smallImg} ${i == index ? classes.hoverImg : null}`} >
               <img width={'85px'} height={'85px'} src={UrlFor(imgItem)} onMouseEnter={()=>setIndex(i)}/>
          </Box>
        )
    })
   })
  //  ----------------------------- Cart ---------------------------------------------
     const handelCart =  (ele)=>{
      dispatch(BoxItem(ele));
  }
  return (
    <>
    <Navbar/>
    
    {
       filterProduct.length > 0 ? 
       filterProduct.map((ele)=>{
         return (
           <Box className={classes.container}>
           <Box className={classes.slugItem} sx={{display : {md : 'flex' , xs : 'block'}}}>
              <Box>
                 <img className={classes.mainImg} src={UrlFor(ele.image[index].asset._ref)}/>
                 <Box className={classes.secImg}>
                   {ImageProduct}
                 </Box>
             </Box>
               <Box className={classes.slugBody}>
                   <Typography variant='h3' fontSize={'40px'} color='#2b2e5f' fontWeight={'600'} sx={{marginTop : {md : 0 , xs : '50px'}}}>{ele.name}</Typography>
                   <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  sx={{color : 'red' , padding : '10px 0px'}}/>
                   <Typography variant='h6' sx={{padding : '10px 0px' , color : '#2b2e5f' , fontWeight : 'bold'}}>Details:</Typography>
                     <Typography sx={{opacity : '0.7' , marginBottom : '35px'}}>{ele.details}</Typography>
                     <Typography variant='h5' mb={4} fontWeight='bold' color={'red'}>${ele.price * quantity}</Typography>
                      
                       <Box className={classes.quantityTable}>
                         <Typography variant='h5' fontWeight={'bold'} color='#2b2e5f'>Quantity: </Typography>
                         <Box className={classes.tableContent}>
                         <IconButton sx={{borderRight : '1px solid #000' , borderRadius : '0' , color : 'red'}} disabled={quantity == 1 ? true : false}  onClick={()=> setQuantity(quantity - 1)}><RemoveIcon/></IconButton>
                         <Typography> {quantity} </Typography>
                         <IconButton sx={{borderLeft : '1px solid #000' , borderRadius : '0' , color : 'green'}} disabled={quantity == 10 ? true : false} onClick={()=> setQuantity(quantity + 1)}><AddIcon/></IconButton>
                         </Box>
                       </Box>
                       <Box className={classes.btn}>
                       <Button variant='outlined' onClick={()=>handelCart(ele)}
                         sx={{width :{ md : '220px', xs : '100%' , margin : {md : ' 60px 40px 0px 0px' , xs : '20px 0px'}}}} color='error'>Add To Cart</Button>
                         <Button  variant='contained'  sx={{width :{ md : '220px', xs : '100%'}}} color='error'>Buy Now</Button>
                       </Box>
               </Box>
           </Box>
       </Box>
         )
       })
      : 
      "Loading......"
    }
    </>

  )
}
export default ProductItem
export const getServerSideProps = async()=>{
  const ProductQuery = '*[_type == "product"]';
  const BannerQuery = '*[_type == "banner"]';
  const product = await client.fetch(ProductQuery);
  const banner = await client.fetch(BannerQuery);
  return {
      props : {
              product,
              banner,
      }
  }
}
