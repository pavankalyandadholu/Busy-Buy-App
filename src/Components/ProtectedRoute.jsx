import { Navigate } from 'react-router-dom';
import { getProfileContextValues } from '../Contexts/profileContext';
const ProtectedRoute = (props) => {
    const data=getProfileContextValues();
    const {isLoggedIn}=data;
  if(!isLoggedIn){
    Navigate({to:"/signin"})
  }
  return (
    <>
   {props.children} 
    </>
  )
}

export default ProtectedRoute