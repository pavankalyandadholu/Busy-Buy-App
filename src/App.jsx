
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
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
          element:<Orders/>
        },
        {
          path:'cart',
          element:<Cart/>
        }
      ]

    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
