import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../component/banner/banner';
import Navbar from '../component/Navbar.js/navbar';
import Product from '../component/product';
import ProductHeader from '../component/product/productHeader';
import { client } from '../lib/client';
import { bannerItems, productItems } from '../Redux/productSlice';
import useStyles from '../utils/style';

 const Home =({product , banner})=> {
  const classes = useStyles();
  return (
    <Box>
      <Navbar/>
       <Box className={classes.container}>
         <Banner/>
         <ProductHeader/>
         <Product product={product}/>
       </Box>
    </Box>
  );
}
export default Home;
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