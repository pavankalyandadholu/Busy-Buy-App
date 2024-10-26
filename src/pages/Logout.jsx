import { getProfileContextValues } from '../Contexts/profileContext'
const Logout = () => {
  const {setIsLoggedIn}= getProfileContextValues();
  setIsLoggedIn(false)
}

export default Logout