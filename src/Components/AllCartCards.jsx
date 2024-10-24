import React from 'react'
import CartCard from './CartCard'
import { getCartProducts } from '../Contexts/cartContext'
const AllCartCards = () => {
    const data=getCartProducts();
    return (
        <div className=' flex items-center justify-center flex-wrap gap-8 mt-6'>
    
        {
          data.cartProducts.map((p,i)=><CartCard key={i} product={p}/>)
        }
        </div>
      )
}

export default AllCartCards