import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favourites from "../Pages/Favourites/Favourites";
import Login from "../Pages/Login/Login";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/phones.json')
            },
            {
                path: "/favourites",
                element: <Favourites></Favourites>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]

    }
])

export default myCreatedRoute;