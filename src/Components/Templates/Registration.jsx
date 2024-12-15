import React, { useState } from "react";
import acc from "../../images/accept.png";
import ProgressRegist from "../Modules/ProgressRegist";
import FrmLoginReg from "../Modules/FrmLoginReg";
import styles from "./registration.module.css";
import AcceptCode from "../Modules/AcceptCode";
import Inquiry from "../Modules/Inquiry";
import FinalReg from "../Modules/FinalReg";
import { Link } from "react-router-dom";

// import { pallet } from "../../Services/ButtonStyles";

function Registration({ code, setCode , capth , setCapth , setMobile ,mobile  , otpNew , setOtpNew }) {
  const [counter, setCounter] = useState(2);
  const [accept, setAccept] = useState(false);
  // const [mobile, setMobile] = useState("");
  const [activeHagh, setActiveHagh] = useState(true);
  const [activeHogh, setActiveHogh] = useState(false);
  const [prgrsArray] = useState([
    {
      id: 1,
      type: "ثبت نام",
      img: acc,
    },
    {
      id: 2,
      type: "تایید کد",
    },
    {
      id: 3,
      type: "استعلام",
    },
    {
      id: 4,
      type: "تکمیل ثبت نام",
    },
  ]);

  return (
    <div className={styles.container}>
      <ProgressRegist
        // acceptHandler={acceptHandler}
        prgrsArray={prgrsArray}
        counter={counter}
      />
      {
        <h3>
          {counter === 2 && "ثبت نام"}
          {counter === 3 && "دریافت کد تاییدیه"}
          {counter === 4 && "استعلام"}
          {counter === 5 && "تکمیل ثبت نام"}
        </h3>
      }
      <br />
      {counter === 2 && (
        <FrmLoginReg
          code={code}
          setCode={setCode}
          accept={accept}
          setAccept={setAccept}
          mobile={mobile}
          setMobile={setMobile}
          setActiveHagh={setActiveHagh}
          activeHagh={activeHagh}
          activeHogh={activeHogh}
          setActiveHogh={setActiveHogh}
          prgrsArray={prgrsArray}
          counter={counter}
          setCounter={setCounter}
          setCapth={setCapth}
          capth={capth}
        />
      )}
      {counter === 3 && (
        <AcceptCode
          otpNew={otpNew}
          setOtpNew={setOtpNew}
          activeHagh={activeHagh}
          setCounter={setCounter}
          counter={counter}
          prgrsArray={prgrsArray}
          mobile={mobile}
        />
      )}
      {counter === 4 && (
        <Inquiry
          otpNew={otpNew}
          mobile={mobile}
          setCounter={setCounter}
          counter={counter}
          prgrsArray={prgrsArray}
          activeHagh={activeHagh}
        />
      )}
      {counter === 5 && <FinalReg />}

      <p className={styles.login} style={{ textAlign: "center" }}>
        درصورتی که حساب کاربری دارید <Link to={"/"}>ورود</Link> کنید
      </p>
    </div>
  );
}

export default Registration;
