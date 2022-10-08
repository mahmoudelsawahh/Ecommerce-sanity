import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import useStyles from '../../utils/style';
import { UrlFor } from '../../lib/client';
import imageItem from '../../assets/1.webp'
import { Fragment } from 'react';
import Link from 'next/link';
const Product =({product})=> {
    const classes = useStyles();
  return (
   <>
         <Box className={classes.productItem}>
   {product.length > 0 ? 
      product.map((ele)=>{
        return (
          <Fragment key={ele._id}>
      <div className={classes.productWidth}>
       <Link href={`/product/${ele.slug.current}`}>
       <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={UrlFor(ele.image[0].asset._ref)}
            height="300"
            alt="green iguana"
            sx={{backgroundColor : '#eee'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {ele.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {ele.details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary">
            ${ele.price}
          </Button>
        </CardActions>
      </Card>
       </Link>
      </div>
          </Fragment>
        )
      })
   : 
   "no item here , please add items and try again"
   }
        </Box>

   </>
  );
}
export default Product;