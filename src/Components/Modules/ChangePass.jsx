import React, { useRef, useState } from "react";
import eye from "../../images/eye.png";
import hideEye from "../../images/hideEye.png";
import { changePassProf } from "../../Services/funcRequest";
import ToastContainer from "../../Services/toast";
import styles from "../Modules/changePass.module.css";
import { useNavigate } from "react-router-dom";
function ChangePass({ interception, otpNew }) {
  const [showEye, setShowEye] = useState(false);
  const [ok, setOk] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate(null);
  const refid = useRef(null);
  // const [point, setPoint] = useState(0);
  const [widthPower] = useState(["1%", "25%", "50%", "75%", "100%"]);
  const [colorPower] = useState([
    "#D73F40",
    "#DC6551",
    "#F2B84F",
    "#BDE952",
    "#3ba62f",
  ]);
  const data = {
    password: `${password}`,
    code: `${otpNew}`,
    password_rep: `${rePassword}`,
    type: "mobile",
    type_value: `${interception}`,
    username: `azar_lo`,
  };
  let power = refid.current;
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    let point = 0;

    if (password.length >= 6) {
      let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
      arrayTest.forEach((item) => {
        if (item.test(password)) {
          point += 1;
        }
      });
    }
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
    // power.style.width = widthPower[point];
    // power.style.backgroundColor = colorPower[point];
  };
  const changePassHandler = async (e) => {
    e.preventDefault();
    setOk(true);
    try {
      const res = await changePassProf(data);
      setOk(false);
      if (res.status === "26") {
        ToastContainer("error", "کد وارد شده صحیح نمی باشد");
      } else if (res.status === "1") {
        ToastContainer("error", "اطلاعات وارد شده صحیح نمی باشد");
      } else if (res.status === "8") {
        ToastContainer("success", "رمز عبور با موفقیت تغییر داده شده");
        navigate("/")
      }
    } catch (error) {
      setOk(false);
      ToastContainer("error", "وضعیت اینترنت خود را بررسی کنید");
    }
  };

  return (
    <form onSubmit={changePassHandler} className={styles.group}>
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
            value={password}
            onChange={passwordHandler}
            className={styles.input}
            id="password"
            type={showEye ? "text" : "password"}
            style={{ margin: "0", border: "none", padding: "0 5px" }}
          />
        </div>
        {/* <br/> */}
        <div className={styles.powerContainer}>
          <div className={styles.powerPoint} ref={refid}></div>
        </div>
      </fieldset>
      {/* <br/> */}
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
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className={styles.input}
            id="password"
            type={showEye ? "text" : "password"}
            style={{ margin: "0", border: "none", padding: "0 5px" }}
          />
        </div>
      </fieldset>
      <br />
      <input type="submit" value={ok ? "..." : "تغییر کلمه عبور"} />
    </form>
  );
}

export default ChangePass;
