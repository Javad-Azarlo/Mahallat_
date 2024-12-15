import React, { useState } from "react";
import eye from "../../images/eye.png"
import hideEye from "../../images/hideEye.png"
import styles from "./finalReg.module.css";
function FinalReg() {
  const [showEye, setShowEye] = useState(false);
  const [pass , setPass] = useState("");
  const finalHandler = () => {};
  return (
    <form onSubmit={finalHandler}>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp;نام <span>*</span>
        </legend>
        <input
          // value={mobile}
          // onChange={(e) => setMobile(e.target.value)}
          type="text"
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp;نام خانوادگی <span>*</span>
        </legend>
        <input
          // value={mobile}
          // onChange={(e) => setMobile(e.target.value)}
          type="text"
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp;نام پدر <span>*</span>
        </legend>
        <input
          // value={mobile}
          // onChange={(e) => setMobile(e.target.value)}
          type="text"
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp;جنسیت <span>*</span>
        </legend>
        <input
          // value={mobile}
          // onChange={(e) => setMobile(e.target.value)}
          type="text"
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>&nbsp;&nbsp;پست الکترونیک&nbsp;&nbsp;</legend>
        <input
          // value={mobile}
          // onChange={(e) => setMobile(e.target.value)}
          type="text"
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>&nbsp;&nbsp;کد پستی&nbsp;&nbsp;</legend>
        <input
          // value={mobile}
          // onChange={(e) => setMobile(e.target.value)}
          type="text"
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>&nbsp;&nbsp;آدرس&nbsp;&nbsp;</legend>
        <input
          // value={mobile}
          // onChange={(e) => setMobile(e.target.value)}
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
          <span
            className={styles.ab}
          >
            +
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
      <br />
      <input
        // className={accept ? styles.accept : styles.notAccept}
        style={{ marginTop: "0" }}
        type="submit"
        value="ثبت نام"
      />
    </form>
  );
}

export default FinalReg;
