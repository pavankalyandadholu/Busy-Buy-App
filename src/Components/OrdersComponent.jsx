import React from 'react'
const OrdersComponent = () => {
  
    return (
    <div className=" flex items-center flex-col justify-center gap-4 mt-6"> 
        <div>
<h1 className=" text-xl font-medium">
Ordered On:- 2024-10-22
</h1>
        </div>
        <div>
          <table   className=" text-center overflow-auto ">
            <thead  >
              <tr  className=" bg-gray-200">
                <td  className=" px-4 py-2 text-left text-gray-600 font-bold uppercase border-b-2 border-black">Title</td>
                <td className=" px-4 py-2 text-left text-gray-600 font-bold uppercase border-b-2 border-black">Price</td>
                <td className=" px-4 py-2 text-left text-gray-600 font-bold uppercase border-b-2 border-black">Quantity</td>
                <td className=" px-4 py-2 text-left text-gray-600 font-bold uppercase border-b-2 border-black">Total Amount</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className=" px-4 py-3">
                Fjallraven - Foldsack No....
                </td>
                <td className=" px-4 py-3">
                ₹ 1099
                </td>
                <td className=" px-4 py-3">
                3
                </td>
                <td className=" px-4 py-3">
                ₹ 3297
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className=" px-4 py-3">
                Fjallraven - Foldsack No....
                </td>
                <td className=" px-4 py-3">
                ₹ 1099
                </td>
                <td className=" px-4 py-3">
                3
                </td>
                <td className=" px-4 py-3">
                ₹ 3297
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className=" px-4 py-3">
                Fjallraven - Foldsack No....
                </td>
                <td className=" px-4 py-3">
                ₹ 1099
                </td>
                <td className=" px-4 py-3">
                3
                </td>
                <td className=" px-4 py-3">
                ₹ 3297
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
 
  )
}

export default OrdersComponent