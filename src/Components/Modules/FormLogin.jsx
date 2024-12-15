import React, { useEffect, useState } from "react";
import eye from "../../images/eye.png";
import hideEye from "../../images/hideEye.png";
import Captcha from "./Captcha";
import { Link } from "react-router-dom";
import customToast from "../../Services/toast";
import { LoginAccount } from "../../Services/funcRequest";
import { useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";
import styles from "./formLogin.module.css";
function formLogin({
  code,
  setCode,
  setLcl,
  setCapth,
  capth,
  setPass,
  pass,
  setUser,
  user,
}) {
  const navigate = useNavigate();
  const [showEye, setShowEye] = useState(false);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLcl(JSON.parse(localStorage.getItem("login")));
  }, []);
  // const [local, setLocal] = useLocal("login", "");
  // console.log("local", local);
  const objData = {
    password: `${pass}`,
    software_ver: "103",
    os_ver: "28",
    os: "android",
    software: "faragard",
    username: `${user}`,
    hardware: "Basewin P1000",
    register_id: `fyk5AwJ1Q5eZCQN1czAmBj:APA91bF14ip1RBX3y9r-AiCLQbrkXg68ORUu2MMB6vialVsGsv8cXfHEHL6jlk_Jr51YeXRN4jbW8qB_ou4iTT_6Fn_0T7akus6-EH_ReHwdtWG52ZArifxeimVdmRwRPQs2rg_Jil4Q`,
  };

  const samanehHandler = async (e) => {
    setLoad(true);
    e.preventDefault();
    try {
      if (!pass || !user) {
        setLoad(false);
        customToast("error", "نام کاربری یا رمز عبور را وارد کنید");
      } else if (code !== capth) {
        customToast("error", "کد امنیتی اشتباه می باشد");
        setCode("");
      } else {
        const res = await LoginAccount(objData);
        if (res.status === "26") {
          setLoad(false);
          customToast("error", "لطفا نام کاربری یا رمزعبور را وارد نمایید");
        } else if (res.status === "8") {
          customToast("success", "خوش آمدید");
          localStorage.setItem("login", JSON.stringify(objData));
          navigate("/homeLogin");
        }
      }
    } catch (error) {
      setLoad(false);
      customToast("error", `${error.message} - اینترنت خود را بررسی کنید`);
    }
  };
  return (
    <div className={styles.container}>
      <h3>ورود</h3>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; نام کاربری / تلفن همراه / کد ملی <span>*</span>
        </legend>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
        />
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; رمز عبور<span>*</span>
        </legend>
        <div className={styles.image}>
          <span
            className={styles.ab}
            onClick={() => setShowEye((showEye) => !showEye)}
          >
            <img src={showEye ? hideEye : eye} style={{ width: "15px" }} />
          </span>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className={styles.input}
            type={showEye ? "text" : "password"}
            style={{ margin: "0", border: "none", padding: "0 5px" }}
          />
        </div>
      </fieldset>

      <Captcha
        code={code}
        setCode={setCode}
        capth={capth}
        setCapth={setCapth}
      />
      <div className={styles.btnLogin}>
        <button
          style={{
            background: "rgb(6, 95, 70)",
            height: "40px",
            borderRadius: "6px",
            paddingLeft: "36px",
            paddingRight: "36px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={samanehHandler}
        >
          {load ? (
            <ThreeDot color="#fff" size="small" text="" textColor="#ffffff" />
          ) : (
            " ورود به درگاه"
          )}
        </button>
        {/* <input onChange={samanehHandler} type="button" value="ورود به درگاه" /> */}
        <Link to={"/loginCode"}>
          <input type="button" value="ورود با رمز یکبار مصرف" />
        </Link>
        <Link to={"/followRequest"}>
          <input type="button" value="پیگیری درخواست" />
        </Link>
      </div>
    </div>
  );
}

export default formLogin;
