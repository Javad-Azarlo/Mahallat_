import React, { useEffect, useRef, useState } from "react";
import OtpInput from "react-otp-input";
import { e2p } from "../../Services/ConvertNumber";
import {  resend, verifyResend } from "../../Services/funcRequest";
// import acc from "../../images/accept.png";
import customToast from "../../Services/toast";
// import accgreen from "../../images/acceptGreen.png";

// import { mobileCode, verifyCode } from "../../Services/funcRequest";
import { Link, useNavigate } from "react-router-dom";
// import { prgrsStep } from "../../Services/instance";
import styles from "../Modules/acceptCode.module.css";

function LoginResend({ mobile, otpNew, setOtpNew, setLcl, pass, user }) {
  const [accept, setAccept] = useState(false);
  const [otp, setOtp] = useState();
  const [count, setCount] = useState(60);
  // const [verify ] = useState("12345");
  const [valIput, setValIput] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (count <= 0) return;
    setTimeout(function () {
      // refInput.current.focus;
      setCount((count) => count - 1);
      if (count === 0) return;
    }, 1000);
  }, [count]);
  useEffect(() => {
    setOtpNew(otp);
    if (otpNew) {
      setAccept(true);
    }
  }, [otp]);
  useEffect(() => {
    setLcl(JSON.parse(localStorage.getItem("login")));
  }, []);

  const data = {
    code: `${otpNew}`,
    software_ver: "103",
    os_ver: "28",
    os: "android",
    software: "faragard",
    mobile: `${mobile}`,
    hardware: "Basewin P1000",
    register_id:
      "yk5AwJ1Q5eZCQN1czAmBj:APA91bF14ip1RBX3y9r-AiCLQbrkXg68ORUu2MMB6vialVsGsv8cXfHEHL6jlk_Jr51YeXRN4jbW8qB_ou4iTT_6Fn_0T7akus6-EH_ReHwdtWG52ZArifxeimVdmRwRPQs2rg_Jil4Q",
  };
  const info = {
    password: `${user}`,
    software_ver: "103",
    os_ver: "28",
    os: "android",
    software: "faragard",
    username: `${pass}`,
    hardware: "Basewin P1000",
    register_id: `fyk5AwJ1Q5eZCQN1czAmBj:APA91bF14ip1RBX3y9r-AiCLQbrkXg68ORUu2MMB6vialVsGsv8cXfHEHL6jlk_Jr51YeXRN4jbW8qB_ou4iTT_6Fn_0T7akus6-EH_ReHwdtWG52ZArifxeimVdmRwRPQs2rg_Jil4Q`,
  };
  const acceptHandler = async (e) => {
    e.preventDefault();
    setValIput(true);
    if (otpNew.length < 4) return;
    try {
      const res = await verifyResend(data);
      if (res.status == "26") {
        setValIput(false);
        customToast("error", "کد وارد شده معتبر نیست");
      } else {
        localStorage.setItem("login", JSON.stringify(info));
        navigate("/homeLogin");
      }
    } catch (error) {
      setValIput(false);
      customToast("error", " وضعیت اتصال اینترنت را بررسی کنید");
    }
  };
  const reCode = () => {
    if (count === 0) {
      setCount(60);
      resend({ mobile: `${mobile}` });
      customToast("success", "با موفقیت کد ارسال شد");
    }
  };
  return (
    <form onSubmit={acceptHandler}>
      <div className={styles.container}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          inputStyle={{
            width: "40px",
            marginBottom: "10px",
            height: "40px",
            backgroundColor: "transparent",
            outlin: "none",
            borderRadius: "12px",
            border: "1px solid #dddddd",
          }}
          renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <br />
      <p>کد تایید به شماره {e2p(mobile)} پیامک شد</p>
      <br />
      {count === 0 ? (
        <>
          <Link onClick={reCode}> دریافت مجدد کد ...</Link>
          <br />
        </>
      ) : (
        <p>{e2p(count)} ثانیه مانده تا دریافت مجدد کد</p>
      )}
      <br />

      <input
        className={accept ? styles.accept : styles.notAccept}
        style={{ marginTop: "0" }}
        type="submit"
        value={valIput ? "درحال ارسال ..." : "تایید"}
      />
    </form>
  );
}

export default LoginResend;
