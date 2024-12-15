import { Link, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Captcha from "../Modules/Captcha";
// import { toast } from 'react-toastify';
import customToast from "../../Services/toast.js";
import { resDsposable } from "../../Services/funcRequest";

import styles from "../Templates/loginCode.module.css";
import LoginResend from "./LoginResend.jsx";

function LoginCode({
  code,
  setCode,
  capth,
  setCapth,
  mobile,
  setMobile,
  otpNew,
  setOtpNew,
  setLcl,
  setPass,
  pass,
  setUser,
  user,
}) {
  const [accept, setAccept] = useState(false);
  const [countCode, setCountCode] = useState(1);
  // const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (mobile && code) {
      setAccept(true);
    }
  }, [mobile, code]);

  const loginCodeHandler = (e) => {
    try {
      e.preventDefault();
      if (!code || !mobile) {
        customToast("error", " تلفن همراه و کد امنیتی را وارد نمایید");
      } else if (code !== capth) {
        customToast("error", "کد امنیتی اشتباه می باشد");
        setCode("");
      } else {
        resDsposable({ mobile: `${mobile}` });
        customToast("success", "با موفقیت کد ارسال شد");
        // navigate("/LoginResend");
        setCountCode(2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h3>{countCode === 1 ? "ورود با رمز یکبار مصرف" : "دریافت کد تاییدیه"}</h3>
      {countCode === 1 ? (
        <form onSubmit={loginCodeHandler}>
          <div className={styles.loginCode}>
            <fieldset className={styles.fieldset}>
              <legend>
                &nbsp; تلفن همراه &nbsp;
                <span>*</span>
              </legend>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </fieldset>
            <Captcha
              code={code}
              setCode={setCode}
              setCapth={setCapth}
              capth={capth}
            />
          </div>
          <div className={styles.loginCode}>
            <input
              className={accept ? styles.accept : styles.notAccept}
              style={{ marginTop: "0" }}
              type="submit"
              value="ارسال کد"
            />

            <p className={styles.login} style={{ textAlign: "center" }}>
              درصورتی که حساب کاربری دارید <Link to={"/"}>ورود</Link> کنید
            </p>
          </div>
        </form>
      ) : (
        <LoginResend
          setMobile={setMobile}
          mobile={mobile}
          otpNew={otpNew}
          setOtpNew={setOtpNew}
          setLcl={setLcl}
          setPass={setPass}
          pass={pass}
          setUser={setUser}
          user={user}
        />
      )}
    </div>
  );
}

export default LoginCode;
