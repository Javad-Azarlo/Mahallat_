import React from "react";
import styles from "./logonight.module.css";
import white from "../../images/white.png";
import black from "../../images/black.png"
import ReactSwitch from "react-switch";
import sun from "../../images/icons8-sun-30.png";
import night from "../../images/icons8-night-50.png";
function LogoNight({ handleSoundToggle , sunNight }) {
  return (
    <div className={styles.container} style={{background : sunNight ? "#475569" : "#065f46"}}>
      <img src={white} className={styles.white}/>
      <img src={black} className={styles.black}/>
      <h3>درگاه خدمات الکترونیکی</h3>
      <ReactSwitch
        checked={sunNight}
        onChange={handleSoundToggle}
        onColor="#3b495c"
        offColor="#98eac6"
        checkedIcon={
          <span>
            <img
              src={sun}
              style={{
                width: "25px",
                margin: "auto",
                inset: "0",
                position: "absolute",
              }}
            />
          </span>
        }
        uncheckedIcon={
          <span>
            <img
              src={night}
              style={{
                width: "20px",
                margin: "auto",
                inset: "0",
                position: "absolute",
              }}
            />
          </span>
        }
      />
    </div>
  );
}

export default LogoNight;
