import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () =>{
    let auth = {'token': localStorage.getItem("token") ?? ""};
    console.log(auth.token);
    return(
        auth.token?.length > 0 ? <Outlet/> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;