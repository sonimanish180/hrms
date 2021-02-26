import React from "react";

const Login = (props) => {
  const loginClickHandler = () => {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    localStorage.setItem("access-token", jwtToken);

    props.history.push("/");
  };
  return <button onClick={loginClickHandler}>Login</button>;
};

export default Login;
