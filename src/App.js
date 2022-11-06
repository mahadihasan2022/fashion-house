import { Children, useState } from "react";
import {  createBrowserRouter, RouterProvider, Route, Outlet, Navigate, } from "react-router-dom";
import LeftBar from "./Header/LeftBar/LeftBar";
import Navbar from "./Header/NavBar/Navbar";
import RightBar from "./Header/RightBar/RightBar";
import Home from "./Pages/Home/Home"

function App() {
  const [user, setUser] = useState();


  const Layout = () =>{
    // className={`theme-${darkMode ? "dark " : "light"}`}
    return(
      <div>
        <Navbar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
         <div style={{flex: 6}}>
         <Outlet/>
         </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ( {children} ) =>{
    
    if (!user){
      // return <Navigate to='/login'/>
    }

    return children

  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: 
           <ProtectedRoute>
              <Layout/>
           </ProtectedRoute>,
      Children: [
        {
          path: "/",
          element: <Home/>
        }
      ]
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
