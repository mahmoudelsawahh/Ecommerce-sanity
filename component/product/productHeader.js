import { Box, Typography } from '@mui/material'
import React from 'react'
import useStyles from '../../utils/style';

 const ProductHeader = () => {
    const classes = useStyles();
  return (
    <Box className={classes.productHeader}>
        <Typography variant='h2'>best seller product</Typography>
        <Typography>speaker there are many variations passages</Typography>
    </Box>
  )
}
export default ProductHeader