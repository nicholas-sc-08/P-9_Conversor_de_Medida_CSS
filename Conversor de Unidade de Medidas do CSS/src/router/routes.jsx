import { createBrowserRouter } from "react-router-dom"
import DashBoard from "../pages/DashBoard";
import Cadastro from "../pages/Cadastro";
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';

const router = createBrowserRouter([
    
    { path: "/", element: <DashBoard /> },
    { path: "/cadastro", element: <Cadastro/>},
    { path: "/login", element: <Login/>},
    { path: "/perfil", element: <Perfil/>}
    
])

export default router;