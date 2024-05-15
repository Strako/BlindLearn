import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = () =>{
    let auth = {'token': localStorage.getItem("token") ?? ""};
    console.log(auth.token);
    return(
    auth.token?.length > 0 ? <Navigate to="/" /> : <Outlet/>
    )
};

export default PublicRoutes;