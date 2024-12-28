import { createBrowserRouter } from "react-router-dom";
import Interface from "../components/interface/Interface";
import Login from "../components/login/Login";
import CreateAccount from "../components/createAccount/CreateAccount";
import VerifyEmail from "../components/verifyEmail/VerifyEmail";

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
        
    }
])