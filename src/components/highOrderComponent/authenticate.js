import { Route } from "react-router-dom";
import Login from "../login/Login";

function authenticate(component) {
    const accessToken = localStorage.getItem("access-token");

    // API validate the token

    const isloggedIn = accessToken ? true : false;

    if(isloggedIn) {
        return component;
    } else {
        return () => {
            window.location.replace("/login");
            return (<div>Unauthorised</div>);
        }
    }


}

export default authenticate;