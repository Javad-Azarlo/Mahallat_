import React, { useEffect, useState } from "react";
import FrmRecverPass from "../Modules/FrmRecverPass";
import { Link } from "react-router-dom";
import customToast from "../../Services/toast";

import styles from "../Templates/forgotPass.module.css";
import { forgotPassCode } from "../../Services/funcRequest";
import ForgotResend from "../Modules/ForgotResend";
import ChangePass from "../Modules/ChangePass";

function ForgotPass({ code, setCode, capth, setCapth, otpNew, setOtpNew }) {
  const [activeHagh, setActiveHagh] = useState(true);
  const [activeHogh, setActiveHogh] = useState(false);

  const [accept, setAccept] = useState(false);

  const [typeFrm, setTypeFrm] = useState("تلفن همراه");
  const [interception, setInterception] = useState("");
   const [countCode, setCountCode] = useState(1);

  useEffect(() => {
    if (interception && code) {
      setAccept(true);
    }
  }, [interception, code]);
  const forgotData = {
    type: "mobile",
    type_value: `${interception}`,
  };

  const forgotPassHandler = async (e) => {
    e.preventDefault();
    try {
      if (!code || !interception) {
        customToast("error", " تلفن همراه و کد امنیتی را وارد نمایید");
      } else if (code !== capth) {
        customToast("error", "کد امنیتی اشتباه می باشد");
        setCode("");
      } else if (code === capth && interception) {
        const res = await forgotPassCode(forgotData);
        if (res.status == "8") {
          customToast("success", "کد امنیتی ارسال شد");
          setCountCode(2);
        }
      }
    } catch (error) {
      customToast("error", "وضعیت اینترنت خود را بررسی کنید");
    }
  };

  const clickbtn1 = (e) => {
    setActiveHogh((activeHogh) => !activeHogh);
    setActiveHagh((activeHagh) => !activeHagh);
    setTypeFrm(e.target.value);
  };
  const clickbtn2 = (e) => {
    setActiveHogh((activeHogh) => !activeHogh);
    setActiveHagh((activeHagh) => !activeHagh);
    setTypeFrm(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h3>
        {countCode === 1 && "فراموشی رمز عبور"}
        {countCode === 2 && "دریافت کد تاییدیه"}
        {countCode === 3 && "تغییر کلمه عبور"}
      </h3>
      {countCode === 1 && (
        <form onSubmit={forgotPassHandler}>
          <div className={styles.btnType} style={{ marginTop: "5%" }}>
            <input
              className={activeHagh ? "" : styles.btnClic}
              type="button"
              value="تلفن همراه"
              onClick={(e) => clickbtn1(e)}
            />
            <input
              className={activeHogh ? "" : styles.btnClic}
              type="button"
              value="پست الکترونیک"
              onClick={(e) => clickbtn2(e)}
            />
          </div>
          <div className={styles.frmrecovery}>
            <FrmRecverPass
              typeFrm={typeFrm}
              interception={interception}
              setInterception={setInterception}
              code={code}
              setCode={setCode}
              capth={capth}
              setCapth={setCapth}
              activeHagh={activeHagh}
            />
          </div>
          <div className={styles.frmrecovery}>
            <input
              className={accept ? styles.accept : styles.notAccept}
              style={{ marginTop: "0" }}
              type="submit"
              value="فراموشی کلمه عبور"
            />

            <p className={styles.login} style={{ textAlign: "center" }}>
              درصورتی که حساب کاربری دارید <Link to={"/"}>ورود</Link> کنید
            </p>
          </div>
        </form>
      )}
      {countCode === 2 && (
        <ForgotResend
          interception={interception}
          otpNew={otpNew}
          setOtpNew={setOtpNew}
          setCountCode={setCountCode}
        />
      )}
      {countCode === 3 && (
        <ChangePass interception={interception} otpNew={otpNew} />
      )}
    </div>
  );
}

export default ForgotPass;
