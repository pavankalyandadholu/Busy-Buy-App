import { createContext, useContext } from "react";
import { data } from "../assets/productsData";

const productContext=createContext();


export function getProductsDataFromProdutsContext(){
    return useContext(productContext);
}




export default function ProductContextProvider(props) {
    return (<>
        <productContext.Provider value={{products:data}} >
            {
                props.children
            }
        </productContext.Provider>
    </>)
};

