import { Box, Button, Typography } from "@mui/material"
import Image from "next/image";
import useStyles from "../../utils/style";
import paper from '../../assets/1.webp'

const Banner = () => {
    const classes = useStyles();
  return (
    <Box className={classes.banner}>
       <Box className={classes.bannerContent}>
            <Typography fontSize={20}>bets solo</Typography>
            <Typography variant="h2" fontWeight={'bold'}  >Wireless</Typography>
            <Typography color={'#fff'} sx={{fontSize : {lg : '13rem' , md : '11rem' , sm : '9rem' , xs : '4rem'}}} variant="h1">headphone</Typography>
            <Box>
              <Box sx={{position : 'absolute' , top : 0, left : '42%'}}>
              <Image src={paper} width='500px' height={'500px'}/>
              </Box>
            </Box>
             <Box sx={{display : { md : 'flex' , xs : 'block'}}} className={classes.bannerFooter}>
                <Button sx={{borderRadius : '15px', fontWeight : 'bold' , padding : '12px'}} variant="contained" color="error">shop wireless headphone</Button>
                <Box sx={{maxWidth : {md : '400px' , xs : '100%'} , textAlign :{md : 'right' , xs : 'left'} }}>
                    <Typography variant="h6" fontSize={23} fontWeight='bold' color={'##060667'}>description</Typography>
                    <Typography sx={{lineHeight : 1.7 , marginTop : '5px' , opacity : 0.6}}>
                    The new waterfront expansion and upgrade efforts continue! In September, Market staff began to replace the elevator and staircase that connects visitors between Pike Place .
                    </Typography>
                </Box>
             </Box>

       </Box>
    </Box>
  )
}
export default Banner