import { createContext, useContext, useState } from "react";
import { userProfiles } from "../DataBase/UserProfiles";
import bcrypt from 'bcryptjs'
const profileContext=createContext();

export function getProfileContextValues(){
    return useContext(profileContext);
}

async function registerUser(userData){
    const newPassword= await bcrypt.hash(userData.password,12);
    userData.password=newPassword;
    userData.cart=[];
    userData.orders=[];
    userProfiles.push(userData);
    console.log(userProfiles);
  
 
}

async function loginUser(userData,setIsLoggedIn){
    const isUserExist= userProfiles.find(u=>u.email==userData.email);
    console.log(isUserExist);
    if(isUserExist){
        setIsLoggedIn(isUserExist);
    }

}

export default function ProfileContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
    <profileContext.Provider value={ {isLoggedIn,registerUser,loginUser,setIsLoggedIn}}>
{props.children}

    </profileContext.Provider>)
};
