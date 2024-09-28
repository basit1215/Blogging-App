import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Layout from "./Layout"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Dashboard from "./Pages/Dashboard"
import Profile from "./Pages/Profile"

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout/>,
        children: [
            {
            path: "",
            element: <Home/>
        },
        {
            path: "login",
            element: <Login/>
        },
        {
            path: "register",
            element: <Register/>
        },
        {
            path: "dashboard",
            element: <Dashboard/>
        },
        {
            path: "profile",
            element: <Profile/>
        },
        {
            path: "*",
            element: <h1>Not Found!</h1>
        }
    ]
    }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>

</RouterProvider>
)