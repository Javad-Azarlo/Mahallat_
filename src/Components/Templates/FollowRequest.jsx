import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Captcha from "../Modules/Captcha";
// import { toast } from 'react-toastify';
import customToast from "../../Services/toast.js";
import styles from "../Templates/followRequest.module.css";

function FollowRequest({code , setCode}) {
  const [accept, setAccept] = useState(false);
  const [interception, setInterception] = useState("");
  useEffect(() => {
    if (interception && code) {
      setAccept(true);
    }
  }, [interception, code]);

  const interceptionHandler = (e) => {
    e.preventDefault();
    if (!code || !interception) {
      customToast("error", " تلفن همراه و کد امنیتی را وارد نمایید");
    } else {
      // setAccept(true);
      customToast("success", "با موفقیت کد ارسال شد");
    }
  };

  return (
    <div className={styles.container}>
      <h3>پیگیری درخواست</h3>

      <form onSubmit={interceptionHandler}>
        <div className={styles.loginCode}>
          <fieldset className={styles.fieldset}>
            <legend>
              &nbsp;کد رهگیری &nbsp;
              <span>*</span>
            </legend>
            <input
              type="text"
              value={interception}
              onChange={(e) => setInterception(e.target.value)}
            />
          </fieldset>
          <Captcha code={code} setCode={setCode} />
        </div>
        <div className={styles.loginCode}>
          <input
            className={accept ? styles.accept : styles.notAccept}
            style={{ marginTop: "0" }}
            type="submit"
            value="جستجو"
          />

          <p className={styles.login} style={{ textAlign: "center" }}>
            درصورتی که حساب کاربری دارید <Link to={"/"}>ورود</Link> کنید
          </p>
        </div>
      </form>
    </div>
  );
}

export default FollowRequest;
