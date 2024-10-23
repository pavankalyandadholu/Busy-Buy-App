import React from 'react'
import { getProductsDataFromProdutsContext } from '../Contexts/productContext';

    import ProductCard from './ProductCard';

const AllProductCards = () => {
  const data=getProductsDataFromProdutsContext();

  return (
    <div className=' flex items-center justify-center flex-wrap gap-8 mt-6'>

    {
      data.products.map((p,i)=><ProductCard key={i} product={p}/>)
    }
    </div>
  )
}

export default AllProductCards