import React, { useState } from 'react'

const Filters = () => {
    const [priceRange , setPriceRange ] = useState(0)
  return (
    <div className=' p-3 bg-blue-100 rounded-md w-full pr-6  sm:w-["100px"] min-w-56 mt-7 '>
        <div>

        <div>
            <h1 className=' text-xl font-medium'>Filter</h1>
            <p className='text-lg mt-2'>Price :{priceRange}</p>
            <input className=' bg-red-700' type="range" name="priceRange" step={"10"} id="priceRange" min={"0"} max={99991} onChange={(e)=>setPriceRange(e.target.value)} />
        </div>
        <div className=' mt-4'>
    <h1 className=' text-xl font-semibold'>Category</h1>
        <div className='mt-2
        '>
            <div>
                <input type="checkbox" name="mensClothing" id="mensClothing" />
                <label htmlFor="mensClothing">Men's Clothing</label>
            </div>
            <div>
                <input type="checkbox" name="womensClothing" id="womensClothing" />
                <label htmlFor="womensClothing">Women's Clothing</label>
            </div>
            <div>
                <input type="checkbox" name="jewelery" id="jewelery" />
                <label htmlFor="jewelery">Jewelery</label>
            </div>
            <div>
                <input type="checkbox" name="electronics" id="electronics" />
                <label htmlFor="electronics">Electronics</label>
            </div>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Filters