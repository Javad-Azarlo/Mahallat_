import React from "react";
import { e2p } from "../../Services/ConvertNumber";
import styles from "../Modules/progressRegist.module.css";

function ProgressRegist({ prgrsArray, counter }) {
  return (
    <div className={styles.progresscontainer}>
      <div className={styles.progress} id="progress"></div>

      {prgrsArray.map((item) => (
        <div
          key={item.id}
          className={`${styles.textwrap} ${
            item.id === counter - 1 && styles.active
          }`}
        >
          <div className={styles.circle}>
            {item.img ? <img src={item.img} /> : e2p(item.id)}
          </div>
          <p className={styles.text}>{item.type}</p>
        </div>
      ))}
    </div>
  );
}

export default ProgressRegist;
