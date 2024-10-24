import React, { useState } from 'react'
import { getProductsDataFromProdutsContext } from '../Contexts/productContext';
import { getProfileContextValues } from '../Contexts/profileContext';
import { Navigate } from 'react-router-dom';

const ProductCard = (props) => {
  const {product}=props;
  const productData=getProductsDataFromProdutsContext();
  const profileData= getProfileContextValues();
  function addtoCart(product){
    if(profileData.isLoggedIn){
      productData.addToCart(product)
    }else{
      console.log("user not logged in")
    
  }


  }
  return (
    <div className=' w-80  border-2 rounded-md p-3  text-xl shadow-md'>
      <div><img className='w-80 object-contain h-80' src={product.image} alt="" /></div>
      <div>
        <h1 className=' text-xl
         font-semibold capitalize mt-2'>{product.title.length>27? product.title.slice(0,26)+"...": product.title.slice(0,26)}</h1>
        <p className='mt-2 font-medium'>&#8377; {Math.floor(product.price*84)}</p>
        <button className=' mt-2 border-2 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 w-full text-white font-semibold' onClick={()=>addtoCart(product)
}>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard