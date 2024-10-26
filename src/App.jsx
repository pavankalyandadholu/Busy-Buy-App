
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import ProductContextProvider from './Contexts/productContext'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Logout from './pages/Logout'
import ProfileContextProvider from './Contexts/profileContext'
import ProtectedRoute from './Components/ProtectedRoute'
function App() {
  const router=createBrowserRouter([
    {
      path:"/",element:<Navbar/>,
      children:[
        {
          index:true,
          element:<Home/>
        },{
          path:"orders",
          element:<ProtectedRoute><Orders/></ProtectedRoute>
            
        },
        {
          path:'signin',
          element:<SignIn/>
        },
        {
          path:'signup',
          element:<SignUp/>
        },
        {
          path:'cart',
          element:<ProtectedRoute><Cart/></ProtectedRoute>
           
        },{
          path:'logout',
          element:<ProtectedRoute><Logout/></ProtectedRoute>
        }
      ]

    }
  ])
  return (
    <>
<ProfileContextProvider>

    <ProductContextProvider>
    <RouterProvider router={router} />

    </ProductContextProvider>
</ProfileContextProvider>

    </>
  )
}

export default App
