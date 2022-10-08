import { makeStyles } from '@mui/styles';
 const useStyles = makeStyles({
     navbar : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '97%',
        margin : 'auto',
        padding : '15px 0px',
        '& h5' : {
            fontSize : '25px',
            color : '#1f1e1ed4',
        }
     },

     container : {
        width : '92%',
        margin : 'auto',
     },
     banner : {
        width : '100%',
        height : '550px',
        backgroundColor : '#ddd',
        borderRadius : '25px',
        marginTop : '5px',
        position : 'relative',

     },
     bannerContent : {
         position : 'absolute',
         top : '50%',
         left : '0%',
         transform:'translate(5% , -50%)',
         width : '90%'
         
     },
    bannerFooter : {
      width : '100%',
      alignItems : 'center',
      justifyContent : 'space-between',
    },
    productHeader : {
        textAlign : 'center',
        fontWeight : 700,
        padding : '35px 0px',
        '& h2' :{
            color : '#060667'
        },
        '& p' : {
          opacity : 0.7
        },
    },
    productItem : {
        width: '100%',
        flexWrap: 'wrap',
        display: 'flex',
        alignItems : 'center'        
    },
    productWidth : {
     margin : '15px',
    },
    // ------------------------------------------------------------
    slugItem : {
        marginTop :'30px',
        alignItems : 'flex-start',
        width : '100%'
    },
    mainImg : {
        width : '420px',
        height : '420px',
        backgroundColor : '#eee',
        borderRadius : '15px',
        marginRight : '50px'

    } ,
    secImg : {
            width : '410px',
            display : 'flex',
            alignItems : 'center',
        },
        smallImg : {
            backgroundColor : '#eee',
            margin : '30px 10px 0px 0px',
            borderRadius : '10px'
        },
        hoverImg : {
            backgroundColor : 'red',
            cursor : 'pointer'
        },
    slugBody : {
        fontWeight : 700,
    },
    quantityTable : {
        display : 'flex',
        alignItems : 'center',
    },
    tableContent : {
        display : 'flex',
        width : '135px',
        border : '1px solid #000',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        textAlign : 'center',
        marginLeft : '20px',
        opacity : '0.7',
        '& p':{
            width : '33.333%',
            fontSize : '22px'
        },
    },
    btn : {  
        margin : '35px 10px',  
        '& button' : {
            padding : '10px 20px',
            fontWeight : 'bold',
            fontSize : '17px',
            marginRight : '40px',
            marginBottom : '25px'
        }
    },

},{name: "MuiExample_Component"})
export default useStyles;
