import React from 'react'

const CartCard = ({product}) => {
    return (
        <div className=' w-80  border-2 rounded-md p-3  text-xl shadow-md'>
          <div><img className='w-80 object-contain h-80' src={product.image} alt="" /></div>
          <div>
            <h1 className=' text-xl
             font-semibold capitalize mt-2'>{product.title.length>27? product.title.slice(0,26)+"...": product.title.slice(0,26)}</h1>
             <div className='flex justify-between items-center'>
            <p className='mt-2 font-medium'>&#8377; {Math.floor(product.price*84)}</p>
            <div className=' w-20  flex justify-between items-center px-1 text-2xl'>
            <button className=''>-</button>
            <span className=''>1</span>
            <button>+</button>
            </div>
             </div>
            <button className=' mt-2 border-2 px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 w-full text-white font-semibold'>Remove From Cart</button>
          </div>
        </div>
      )
}

export default CartCard