import { createContext, useContext, useState } from "react";
import { productsData } from "../assets/productsData";



const productContext=createContext();

export function getProductsDataFromProdutsContext(){
    return useContext(productContext);
}

// Function to add to Cart
async function addToCart(item){
   console.log(item);
      
  
    

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

