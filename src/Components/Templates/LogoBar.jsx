import React, { useEffect, useRef, useState } from "react";
import white from "../../images/white.png";
import black from "../../images/black.png";
import ReactSwitch from "react-switch";
import sun from "../../images/icons8-sun-30.png";
import night from "../../images/icons8-night-50.png";
import styles from "./logoBar.module.css";
import { pallet } from "../../Services/ButtonStyles";

function LogoBar({ state , clr}) {
  const [sunNight, setSunNight] = useState(false);
  const refdiv = useRef();
  useEffect(() => {
    pallet(state, refdiv.current);
  }, [state]);

  const handleSoundToggle = () => {
    setSunNight((sunNight) => !sunNight);
    let bdy = document.querySelector("body");
    if (sunNight) {
      bdy.style.backgroundColor = "#ecfdf5";
    } else {
      bdy.style.backgroundColor = "#0f172a";
    }
  };

  return (
    <div
      className={styles.container}
      ref={refdiv}
      style={{ background: sunNight ? "#475569" : "#065f46" }}
    >
      <img src={white} className={styles.white} />
      <img src={black} className={styles.black} />
      <h3>درگاه خدمات الکترونیکی</h3>
      <ReactSwitch
        checked={sunNight}
        onChange={handleSoundToggle}
        offColor={state ? clr : "#98eac6"}
        onColor="#3b495c"
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
    /* <LogoNight handleSoundToggle={handleSoundToggle} sunNight={sunNight} /> */
  );
}
export default LogoBar;
