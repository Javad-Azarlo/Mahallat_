import React, { useEffect, useReducer, useState } from "react";
import back from "../../../images/back.png";
import { maping, monthName } from "../../../Services/instance";
import {p2e} from "../../../Services/ConvertNumber"

import styles from "./yearsPicker.module.css";
function YearsPicker({ years, e2p, toYear, setY, month, setCountPicker, y }) {
  const [yearData, setYearData] = useState(maping(years));
  const [selectMonth, setSelectMonth] = useState(
    monthName.find((item) => item.id === month)
  );
  useEffect(() => {
    setSelectMonth(monthName.find((item) => item.id === month));
  }, [month]);
  let initialState = {
    id: 5,
    name: yearData.obj5,
  };
  let reducer = (state, action) => {
    if (action.type === "next") {
      if (state.id === 9) {
        return { id: 1, name: yearData[`obj1`] };
      } else {
        return { ...{ id: state.id + 1, name: yearData[`obj${state.id}`] } };
      }
    } else {
      if (state.id === 1) {
        return { id: 8, name: yearData[`obj8`] };
      } else {
        return { ...{ id: state.id - 1, name: yearData[`obj${state.id}`] } };
      }
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  const yearsHandler = (e) => {
    const val = e.target.innerText;
    setY(p2e(val));
  };
  return (
    <p style={{ textAlign: "center" }}>
      <p
        className={styles.yearsHead}
        style={{ margin: "4px 0", borderBottom: "1px solid #eee" }}
      >
        <span onClick={() => dispatch({ type: "next" })}>
          <img style={{ rotate: "180deg" }} src={back} />
        </span>

        <p style={{cursor :'pointer'}} onClick={(e) => setCountPicker(1)}>{selectMonth.name}</p>
        <p style={{cursor :'pointer'}} onClick={(e) => setCountPicker(1)}> {e2p(y ? y : toYear)}</p>
        <span onClick={() => dispatch({ type: "prev" })}>
          <img src={back} />
        </span>
      </p>
      <p className={styles.yearsBody}>
        {count.name.map((item) => (
          <span onClick={yearsHandler} key={item.id}>
            {e2p(item.name)}
          </span>
        ))}
      </p>
    </p>
  );
}

export default YearsPicker;
