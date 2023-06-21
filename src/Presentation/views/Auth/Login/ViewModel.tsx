import { useState } from "react";

const LoginViewModel = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onShowPassword = () => setShowPassword((prevState) => !prevState);
  function initialValues() {
    return {
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

export default LoginViewModel;
