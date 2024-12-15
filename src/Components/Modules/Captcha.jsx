import React, { useEffect, useState } from "react";
import { random } from "../../Services/ButtonStyles";
import styles from "./captcha.module.css";

function Captcha({ code, setCode, capth, setCapth }) {

  // useEffect(() => {
  //   if (code !== captcha) {
  //     ToastContainer("error", "کد امنیتی اشتباه می باشد");
  //   } else {
  //     console.log("ok");
  //   }
  // }, [code]);
  const captchHandler = (e) => {
    setCapth(random);
  };

  return (
    <fieldset>
      <legend>
        &nbsp; کد امنیتی <span>*</span>
      </legend>
      <form className={styles.captchaFrm}>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={6}
          type="text"
        />
        <input
          onClick={captchHandler}
          className={styles.captchaBtn}
          type="button"
          value={capth}
          // onChange={(e) => setCode(e.target.value)}
        />
      </form>
    </fieldset>
  );
}

export default Captcha;
