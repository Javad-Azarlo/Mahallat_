import React from "react";
import styles from "./frmRecverPass.module.css";
import Captcha from "./Captcha";
function FrmRecverPass({
  typeFrm,
  interception,
  setInterception,
  code,
  setCode,
  setCapth,
  capth,
  activeHagh,
}) {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; {typeFrm}&nbsp;
          <span>*</span>
        </legend>
        <input
          type="text"
          value={interception}
          onChange={(e) =>
            setInterception(
              activeHagh
                ? e.target.value.replace(/[^0-9]/g, "")
                : e.target.value
            )
          }
          maxLength={activeHagh && "11"}
        />
      </fieldset>
      <Captcha
        code={code}
        setCode={setCode}
        capth={capth}
        setCapth={setCapth}
      />
    </>
  );
}

export default FrmRecverPass;
