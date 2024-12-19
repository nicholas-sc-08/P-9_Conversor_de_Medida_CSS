import { createBrowserRouter } from "react-router-dom"
import DashBoard from "../pages/DashBoard";

const router = createBrowserRouter([
    
    { path: "/", element: <DashBoard /> },   
])

export default router;