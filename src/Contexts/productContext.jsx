import { createContext, useContext, useState } from "react";
import { productsData } from "../assets/productsData";
import { userProfiles } from "../DataBase/UserProfiles";


const productContext=createContext();

export function getProductsDataFromProdutsContext(){
    return useContext(productContext);
}

// Function to add to Cart
 function addToCart(product,user){
   const isExistUser= userProfiles.indexOf(user);
   if(isExistUser!=-1){
    const existItemIndex= user.cart.findIndex(i=>i.id==product.id);
    if(existItemIndex!=-1){
        user.cart[existItemIndex].itemsCount+=1;
     
    }else{

        user.cart.push({...product,itemsCount:1});
    }
    userProfiles[isExistUser]=user;
    
   }
}






export default function ProductContextProvider(props) {

const [data , setData ] = useState(productsData)

   



    return (<>
        <productContext.Provider value={{products:data,addToCart}} >
            {
                props.children
            }
        </productContext.Provider>
    </>)
};

