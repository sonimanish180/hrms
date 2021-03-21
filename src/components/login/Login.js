import React from "react";
import Button from "../elementalComponents/button/Button";
import Input from "../input/Input";
import { ErrorMessage, useFormik, yupToFormErrors } from "formik";
import * as yup from "yup";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email cannot be empty.!")
        .email("Invalid Email.!"),
      password: yup
        .string()
        .required("Password cannot be empty.!")
        .min(8, "Password must be greater than 8 characters.!")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Weak Password"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      loginClickHandler();
    },
  });

  const loginClickHandler = () => {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    localStorage.setItem("access-token", jwtToken);

    props.history.push("/");
  };

  const signupClickHandler = () => {
    props.history.push("/signup");
  }


  const onBlur = (name) => {
    formik.setFieldTouched(name, true);
  };

  const onChange = (name, value) => {
    formik.setFieldValue(name, value);
  }

  return (
    <body className="login-page">
      <div className="login">
        
      <form className="form" onSubmit={formik.handleSubmit}>
        <header className="login-header">
          <h1>HRMS</h1>
        </header>
        <div className="input-container">
          <div className="input-field">
          <Input
            type="email"
            name="email"
            classes={{ inputComponentClass: "login-input" }}
            value={formik.values.email}
            placeHolder="Enter Email Id.!"
            onBlur={(event) => onBlur(event.target.name)}
            onChange={(event) =>
              onChange(event.target.name, event.target.value)
            }
            errors={formik.errors.email}
          /></div>
          <div className="input-field">
          <Input
            type="password"
            name="password"
            classes={{ inputComponentClass: "login-input" }}
            value={formik.values.password}
            placeHolder="Enter Password.!"
            onBlur={(event) => onBlur(event.target.name)}
            onChange={(event) =>
              onChange(event.target.name, event.target.value)
            }
            errors={formik.errors.password}
          /></div>
        </div>        
        <div className="button-container">
          <Button type="submit" label="Log In" buttonClass="--primary" />
          <Button onClick={signupClickHandler} buttonClass="--secondary" label="Sign Up" />
        </div>
        </form>
      </div>
    </body>
  );
};

export default Login;
