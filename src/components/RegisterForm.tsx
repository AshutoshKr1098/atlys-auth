import React, { useState } from "react";
import Form from "./Form";

interface RegisterProps {
  toggleView: () => void;
}

const Register: React.FC<RegisterProps> = ({ toggleView }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    username: "",
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
      label: "Email",
      placeholder: "Enter your email",
      validationRegex: /^(?!\s*$).+/,
      validationText: "Field cannot be empty",
      value: formValues.email,
      onChange: handleInputChange("email"),
    },
    {
      label: "Username",
      placeholder: "Choose a preferred username",
      validationRegex: /^(?!\s*$).+/,
      validationText: "Field cannot be empty",
      value: formValues.username,
      onChange: handleInputChange("username"),
    },
    {
      label: "Password",
      placeholder: "Choose a strong password",
      validationRegex: /^.{8,}$/,
      validationText: "Password must be at least 8 characters long",
      value: formValues.password,
      onChange: handleInputChange("password"),
    },
  ];

  return (
    <Form
      title='Sign Up'
      subtitle='Create an account to continue'
      buttonText='Continue'
      onSubmit={() => {
        /* handle registration */
      }}
      toggleView={toggleView}
      inputFieldsConfig={inputFieldsConfig}
    />
  );
};

export default Register;
