import React, { Dispatch, SetStateAction, useState } from "react";
import Form from "./Form";
import { allFieldsFilled } from "../../utils";

interface LoginProps {
  toggleView: () => void;
  login: (key: string) => void;
}

const Login: React.FC<LoginProps> = ({ toggleView, login }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange =
    (field: keyof typeof formValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [field]: e.target.value,
      });
    };

  const inputFieldsConfig = [
    {
      label: "Email or Username",
      placeholder: "Enter your email or username",
      validationRegex: /^(?!\s*$).+/,
      validationText: "Field cannot be empty",
      value: formValues.email,
      onChange: handleInputChange("email"),
    },
    {
      label: "Password",
      placeholder: "Enter your password",
      helperText: "Forgot password?",
      validationRegex: /^.{8,}$/,
      validationText: "Password must be at least 8 characters long",
      value: formValues.password,
      onChange: handleInputChange("password"),
    },
  ];

  return (
    <Form
      title='Welcome Back'
      subtitle='Log into your account'
      buttonText='Login now'
      disabled={!allFieldsFilled(formValues)}
      onSubmit={() => login(formValues.email)}
      toggleView={toggleView}
      inputFieldsConfig={inputFieldsConfig}
    />
  );
};

export default Login;
