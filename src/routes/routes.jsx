import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import DashBoard from "../dashboard/DashBoard";
import DashHome from "../dashboard/DashHome";

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
    {
      path: "dashBoard",
      element: <DashBoard></DashBoard>,
      children:[
        {
          path:'dashHome',
          element:<DashHome></DashHome>
        }
      ]
    }
  ]);
  export default router  