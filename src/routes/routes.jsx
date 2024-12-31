import { createBrowserRouter } from "react-router-dom";
import Interface from "../components/interface/Interface";
import Login from "../components/login/Login";
import CreateAccount from "../components/createAccount/CreateAccount";
import VerifyEmail from "../components/verifyEmail/VerifyEmail";
import Dashboard from "../components/dashboard/Dashboard";

export const routes = (setMyMode) => createBrowserRouter([
    {
        path:'',
        element: <Interface setMyMode={setMyMode}/>
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/createaccount',
        element: <CreateAccount/>
    },
    {
        path: 'verify-email',
        element: <VerifyEmail />   
    },
    {
        path: '/dashboard',
        element: <Dashboard />   
    }
])