import React  from "react";
import  ReactDOM  from "react-dom/client";
import Header  from "./components/Header" ; 
import Body from './components/Body';
import Footer from "./components/Footer";
import About from "./components/About";
import ContactPage from './components/contactPage';
import '../index.css';
//help us create routing
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Error from "./components/error";
import RestaurentMenu from './components/ResturentMenu/index';


//food villa
const AppLayout=()=>{
  return(
    <>
    <Header/>
    {/* <Body/> */}
    <Outlet/>

    <Footer/>
    </>
  )
}
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[

      {path:'/',
      element:<Body/>},
      {path:'/about', element:<About/>},
      {path:'/contact', element:<ContactPage/>},
      {path:'/restaurant/:id', element:<RestaurentMenu/>}
    ]
    
  },

  
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);