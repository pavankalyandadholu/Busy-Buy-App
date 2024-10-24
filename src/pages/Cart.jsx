import CartContextProvider from '../Contexts/cartContext'
import AllCartCards from '../Components/AllCartCards'
import CartTotalAmount from '../Components/CartTotalAmount';
import { getProfileContextValues } from '../Contexts/profileContext';

const Cart = () => {
  const profileData= getProfileContextValues();
    
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