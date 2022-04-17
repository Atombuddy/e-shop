import React from 'react'
import { Card,Typography,Chip,CardMedia,Button, Grid } from '@material-ui/core'
import "./styles.css"
import { DeleteForever } from '@material-ui/icons'

export default function ProductCheckout({myMap,product,qty,handleCartDelete}) {

  return (
    <Card className='cartCard'>
      <Grid item xs={2}>
        <CardMedia className='cartMedia' component="img" image={product.image} />
        </Grid>
        <Grid item xs={10} className="prodDesc">
        <Typography className='cartTitle' >{product.title}</Typography> 
        <Chip label={`₹ ${product.price*qty}`} size="small" className='cartPriceChip' />
        <div className='controlProd'>
          <Chip label={`Qty:${ qty}`} size="small" className='prodQty'/>
          <Button className="deleteProduct" onClick={()=>handleCartDelete(product)}><DeleteForever className='deleteIcon' style={{color:'red'}}/></Button>
        </div>
        </Grid>
       
      </Card>
  )
}

