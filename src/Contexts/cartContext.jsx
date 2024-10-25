import { createContext, useContext, useEffect, useState } from "react";
import { getProfileContextValues } from "./profileContext";
import { productsData } from "../assets/productsData";
import { userProfiles } from "../DataBase/UserProfiles";
const cartContext = createContext();
export function getCartProducts(){
    return useContext(cartContext);
}


    
    function addToCart(product,user,setCartItems){
      const isExistUser= userProfiles.indexOf(user);
      if(isExistUser!=-1){
       const existItemIndex= user.cart.findIndex(i=>i.id==product.id);
       if(existItemIndex!=-1){
           user.cart[existItemIndex].itemsCount+=1;
          
       }else{
   
           user.cart.push({...product,itemsCount:1});
       }
       userProfiles[isExistUser]=user;
        setCartItems([...user.cart])
      }
   }
   function completelyRemoveFromCart(product,user,setCartItems){
    const isExistUser= userProfiles.indexOf(user);
    if(isExistUser!=-1){
     const existItemIndex= user.cart.findIndex(i=>i.id==product.id);
     if(existItemIndex!=-1){
        user.cart.splice(existItemIndex,1);
      
     }
     userProfiles[isExistUser]=user;
      setCartItems([...user.cart])
    }
   }
    function removeFromCart(product,user,setCartItems){
      const isExistUser= userProfiles.indexOf(user);
      if(isExistUser!=-1){
       const existItemIndex= user.cart.findIndex(i=>i.id==product.id);
       if(existItemIndex!=-1){
        if(user.cart[existItemIndex].itemsCount<=1){
          user.cart.splice(existItemIndex,1);
        }else{

          user.cart[existItemIndex].itemsCount-=1;
        }
       }
       userProfiles[isExistUser]=user;
        setCartItems([...user.cart])
      }
   }
 
   

export default function CartContextProvider(params) {
  const profileData=getProfileContextValues();
  const [cartItems, setCartItems] = useState([]);
  useEffect(()=>{
    if(profileData.isLoggedIn)
    setCartItems([...profileData.isLoggedIn.cart])
  },[])
 
  
    return (
        <cartContext.Provider value={{cartProducts:cartItems,addToCart,cartItems,setCartItems,removeFromCart,completelyRemoveFromCart}} >
            {
                params.children
            }
        </cartContext.Provider>
    )
};
