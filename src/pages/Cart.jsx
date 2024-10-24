import React from 'react'
import CartContextProvider from '../Contexts/cartContext'
import AllCartCards from '../Components/AllCartCards'
import Filters from '../Components/Filters'
import CartTotalAmount from '../Components/CartTotalAmount'

const Cart = () => {
  return (
    <CartContextProvider>


      <div className='  flex flex-col sm:flex-row items-start justify-center gap-5'>
      <CartTotalAmount/>

      <AllCartCards/>
    </div>
    </CartContextProvider>
  )
}

export default Cart