import { useState } from "react";

const RegisterViewModel = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onShowPassword = () => setShowPassword((prevState) => !prevState);
  function initialValues() {
    return {
      name: "",
      email: "",
      password: "",
    };
  }
  return {
    initialValues,
    showPassword,
    onShowPassword,
    errorMessage,
    setErrorMessage,
    loading,
    setLoading,
  };
};

export default RegisterViewModel;
