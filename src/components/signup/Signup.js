import React from "react";
import Button from "../elementalComponents/button/Button";
import Input from "../input/Input";
import { ErrorMessage, useFormik, yupToFormErrors } from "formik";
import * as yup from "yup";

const Signup = (props) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      contactNo: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object().shape({
        fullName: yup.string().required("Fullname cannot be empty.!").min(2, "Name must be atleast 2 Characters long.!"),
        contactNo: yup.string().required("Contact number cannot be empty.!").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
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
      confirmPassword: yup
        .string()
        .required("Password cannot be empty.!")
        .min(8, "Password must be greater than 8 characters.!")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Weak Password"
        )
    }),
    onSubmit: (values) => {
      console.log(values);
      signupClickHandler();
    },
  });

  const signupClickHandler = () => {

    props.history.push("/login");
  };

  const loginClickHandler = () => {
    props.history.push("/login");
  }

  const onBlur = (name) => {
    formik.setFieldTouched(name, true);
  };

  const onChange = (name, value) => {
    formik.setFieldValue(name, value);
  };

  return (
    <body className="signup-page">
      <div className="signup">
        <form className="form" onSubmit={formik.handleSubmit}>
          <header className="signup-header">
            <h1>HRMS</h1>
          </header>
          <div className="input-container">
            <div className="input-field">
              <Input
                type="text"
                name="fullName"
                classes={{ inputComponentClass: "fullname-input" }}
                value={formik.values.fullName}
                placeHolder="Enter Fullname.!"
                onBlur={(event) => onBlur(event.target.name)}
                onChange={(event) =>
                  onChange(event.target.name, event.target.value)
                }
                errors={formik.errors.fullName}
              />
            </div>
            <div className="input-field">
              <Input
                type="text"
                name="contactNo"
                classes={{ inputComponentClass: "contactNo-input" }}
                value={formik.values.contactNo}
                placeHolder="Enter Phone No.!"
                onBlur={(event) => onBlur(event.target.name)}
                onChange={(event) =>
                  onChange(event.target.name, event.target.value)
                }
                errors={formik.errors.contactNo}
              />
            </div>
            <div className="input-field">
              <Input
                type="email"
                name="email"
                classes={{ inputComponentClass: "email-input" }}
                value={formik.values.email}
                placeHolder="Enter Email Id.!"
                onBlur={(event) => onBlur(event.target.name)}
                onChange={(event) =>
                  onChange(event.target.name, event.target.value)
                }
                errors={formik.errors.email}
              />
            </div>
            <div className="input-field">
              <Input
                type="password"
                name="password"
                classes={{ inputComponentClass: "signup-input" }}
                value={formik.values.password}
                placeHolder="Enter Password.!"
                onBlur={(event) => onBlur(event.target.name)}
                onChange={(event) =>
                  onChange(event.target.name, event.target.value)
                }
                errors={formik.errors.password}
              />
            </div>
            <div className="input-field">
              <Input
                type="password"
                name="confirmPassword"
                classes={{ inputComponentClass: "confirmPassword-input" }}
                value={formik.values.confirmPassword}
                placeHolder="Confirm Password.!"
                onBlur={(event) => onBlur(event.target.name)}
                onChange={(event) =>
                  onChange(event.target.name, event.target.value)
                }
                errors={formik.errors.confirmPassword}
              />
            </div>
          </div>
          <div className="button-container">
            <Button type="submit" label="Sign Up" />
            <Button onClick={loginClickHandler} label="Log In" />
          </div>
        </form>
      </div>
    </body>
  );
};

export default Signup;
