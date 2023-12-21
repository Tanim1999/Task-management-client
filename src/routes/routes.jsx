import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import DashBoard from "../dashboard/DashBoard";
import DashHome from "../dashboard/DashHome";
import PrivateRoute from "../privateRoute/PrivateRoute";
import CreateTask from "../dashboard/CreateTask";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
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
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:'dashHome',
          element:<DashHome></DashHome>
        },
        {
          path:'createTask',
          element:<CreateTask></CreateTask>
        },
      ]
    }
  ]);
  export default router  