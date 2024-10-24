import OrdersComponent from "../Components/OrdersComponent"


const Orders = () => {
  return (
    <>
    <div className=" mt-2 py-4">
    <h1 className="text-3xl  font-bold text-center">Your Orders</h1>
    <OrdersComponent/>
    <OrdersComponent/>
    <OrdersComponent/>
    </div>
    </>
  )
}

export default Orders