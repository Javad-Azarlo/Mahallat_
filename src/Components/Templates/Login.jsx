import React from "react";
import FormLogin from "../Modules/FormLogin";
import LoginForgot from "../Modules/LoginForgot";
// import styles from "./login.module.css";
function Login({
  code,
  setCode,
  setLcl,
  lcl,
  capth,
  setCapth,
  user,
  setUser,
  pass,
  setPass,
}) {
   return (
    <>
      <FormLogin
        code={code}
        setCode={setCode}
        setLcl={setLcl}
        lcl={lcl}
        capth={capth}
        setCapth={setCapth}
        setPass={setPass}
        pass={pass}
        setUser={setUser}
        user={user}
      />
      <LoginForgot />
    </>
  );
}

export default Login;
