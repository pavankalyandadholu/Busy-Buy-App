import React from 'react'
import { getProductsDataFromProdutsContext } from '../Contexts/productContext';

import ProductCard from './ProductCard';

const AllProductCards = () => {
  const productData=getProductsDataFromProdutsContext();
  return (
    <div className=' flex items-center justify-center flex-wrap gap-8 mt-6'>

    {
     productData.products.length>0 && productData.products.map((p,i)=> <ProductCard key={i} product={p}/>
     )
    }
    </div>
  )
}

export default AllProductCards