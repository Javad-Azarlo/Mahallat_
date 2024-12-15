import React, { useEffect, useState } from "react";
import { monthName } from "../../../Services/instance";
import back from "../../../images/back.png";
import styles from "./monthPicker.module.css";
import {p2e} from "../../../Services/ConvertNumber"
function MonthPicker({
  month,
  setMonth,
  day,
  e2p,
  setCountPicker,
  setM,
  setD,
  toYear,
  y,
  m
}) {
  // const [monthArray, setMontArrayh] = useState(monthName);

  const [selectMonth, setSelectMonth] = useState(
    monthName.find((item) => item.id === month)
  );
  useEffect(() => {
    setSelectMonth(monthName.find((item) => item.id === month));
  }, [month]);

  const yearsHandler = () => {
    setCountPicker(2);
  };
  const monthHandler = (e) => {
    if (e == "back") {
      if (month === 1) return;
      setMonth((month) => month - 1);
    } else {
      if (month === 12) return;
      setMonth((month) => month + 1);
    }
    // setM(setMonth((month) => month - 1));
  };
  const daySelected = (e) => {
    const val = e.target.innerText;
    setD(p2e(val));
  };
  const monthSelected = (e) => {
    const val = e.target.innerText;
    setM(val);
  };
  return (
    <p style={{ textAlign: "center" }}>
      <p className={styles.monthBox}>
        <span onClick={() => monthHandler("next")}>
          <img style={{ rotate: "180deg" }} src={back} />
        </span>
        <p onClick={monthSelected}> {selectMonth.name}</p>
        <p style={{cursor :'pointer'}} onClick={yearsHandler}>{e2p(y ? y : toYear)}</p>
        <span onClick={() => monthHandler("back")}>
          <img src={back} />
        </span>
      </p>
      <p className={styles.bodyMonth}>
        {day.map((item, index) => (
          <span onClick={daySelected} key={index}>
            {e2p(item)}
          </span>
        ))}
      </p>
    </p>
  );
}

export default MonthPicker;
