import React, { useEffect, useState } from 'react'
import { getProfileContextValues } from '../Contexts/profileContext'
import { getCartProducts } from '../Contexts/cartContext'
const CartTotalAmount = () => {
const [sum, setSum] = useState(0)
  const {isLoggedIn}=getProfileContextValues();
  const {setCartItems,cartItems,submitOrder}= getCartProducts();
  const cart= isLoggedIn.cart;
  useEffect(()=>{
    let itemsSum=0
    if(cart){

      cart.map((i)=>itemsSum+=i.itemsCount*Math.floor(i.price*84)); 
      setSum(itemsSum)
    }

  },[cartItems])
  return (
    <div className='  p-3 pl-8 sm:pl-3 bg-blue-100 rounded-md w-full   sm:w-["100px"] min-w-56 mt-7 '>
    <div className='m-4 p-3 flex items-center justify-center flex-col gap-5'>

    <h1 className=' text-xl font-medium '>Total Price:- &#8377;{sum}/-</h1>
        <button onClick={()=>submitOrder(cartItems,isLoggedIn,setCartItems)} className=' mx-auto border-2 rounded-md bg-blue-500 px-6 py-2'>Purchase</button>
    </div>

</div>
)
}

export default CartTotalAmount