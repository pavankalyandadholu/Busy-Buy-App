import OrdersComponent from "../Components/OrdersComponent"

import { getProfileContextValues } from "../Contexts/profileContext"

const Orders = () => {
  const {isLoggedIn}= getProfileContextValues();
  console.log(isLoggedIn);
  
 


  return (
    <>
    <div className=" mt-2 py-4">
    <h1 className="text-3xl  font-bold text-center">Your Orders</h1>
    {
      isLoggedIn && isLoggedIn.orders.map((o,i)=><OrdersComponent key={i} orders={o}/>) 
    }
    
  
    </div>
    </>
  )
}

export default Orders