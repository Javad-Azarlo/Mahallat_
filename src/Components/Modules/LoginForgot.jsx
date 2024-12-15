import React from "react";
import styles from "./loginForgot.module.css";
import { Link } from "react-router-dom";
function LoginForgot() {
  return (
    <div className={styles.container}>
      <Link to={"https://ssokeshvar.moi.ir/login"}>
        ورود از طریق پنجره واحد وزارت کشور
      </Link>
      <p>
        در صورتی که حساب کاربری ندارید <Link to={"/Registration"}> ثبت نام </Link>
        کنید
      </p>
      <p>
        درصورتیکه کلمه عبور خود را فراموش نمودید از
        <Link to={"/ForgotPass"}>بازیابی کلمه عبور</Link> کنید
      </p>

      <Link style={{ marginTop: "20px" }}>ورود از طریق QR</Link>
    </div>
  );
}

export default LoginForgot;
