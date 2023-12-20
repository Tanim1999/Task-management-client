import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"home",
            element:<Home></Home>
        },
        {
            path:"register",
            element:<Register></Register>
        },
        {
            path:"logIn",
            element:<LogIn></LogIn>
        }
      ]
    },
  ]);
  export default router  