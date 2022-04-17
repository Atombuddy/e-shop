import { Grid, Typography,Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ProductCheckout from './ProductCheckout'
import { Link } from 'react-router-dom'
import "./styles.css"

export default function Checkout({cartProducts,setCartProducts}) {

  const myMap=new Map()
  let sum=0

  for(let item of cartProducts){
    const str=JSON.stringify(item)
    if(myMap.has(str)){
      const currValue=myMap.get(str)
      myMap.set(str,currValue+1)
    }
    else{

      myMap.set(str,1)
    }
  }



  for(let i=0;i<cartProducts.length;i++){
    sum+=(cartProducts[i].price)
  }
  sum=sum.toFixed(2)
  
  
  const handleCartDelete=(product)=>{
    
    const temp=[]
    var found=false;
    for(let i of cartProducts){
      if(i.id==product.id && found==false){
        found=true
      }
      else{
        temp.push(i)
      }
    }
    
    setCartProducts(temp)

  }
  
  if(cartProducts.length===0){
    return <h1 style={{display:"flex",justifyContent:"center",marginTop:"100px",width:"100%"}}>Your Cart is Empty.</h1>
  }
  return (
    <Grid container className='cartGrid'>
      {[...myMap.keys()].map((product)=>(
          
          <Grid key={JSON.parse(product).id} item md={12} xs={12} className="cartGridItem">
                  <ProductCheckout myMap={myMap} product={JSON.parse(product)} qty={myMap.get(product)} handleCartDelete={handleCartDelete} />
          </Grid>
      
      )
          
)}
      
      <div className='checkout'>
        <Typography className="cartTotal">Total&nbsp;&nbsp;</Typography>
        <Typography className='cartPrice' >₹&nbsp;{sum}</Typography>
      </div>
      <Button className="checkoutButton" component={Link} to={`/razorpay/?price=${sum}`}>Proceed to Checkout</Button>
    </Grid>
  )
}