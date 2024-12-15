import React, { useEffect, useState } from "react";
import calender from "../../images/calender.png";
import acc from "../../images/accept.png";
import accgreen from "../../images/acceptGreen.png";
import { today } from "../../Services/instance";
import { inqueryProfile } from "../../Services/funcRequest";
import {
  prgrsStep,
  year,
  days,
  convertDate,
  dateSelect,
  convertMonth,
} from "../../Services/instance";
import { e2p } from "../../Services/ConvertNumber";
import YearsPicker from "./datePicker/YearsPicker";
import MonthPicker from "./datePicker/MonthPicker";
import styles from "../Modules/inquiry.module.css";
function Inquiry({ activeHagh, mobile, counter, setCounter, prgrsArray }) {
  const [accept, setAccept] = useState(false);
  const [years] = useState(year(1300, 1500));
  const [month, setMonth] = useState(+convertMonth());

  const [y, setY] = useState("");
  const [m, setM] = useState("");
  const [d, setD] = useState("");
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  const [day] = useState(days(1, 31));
  const [bxPicker, setBxPicker] = useState(false);
  const [countPicker, setCountPicker] = useState(1);
  const [nationalCode, setNationalCode] = useState("");
  const [toYear, setToYear] = useState(convertDate);
  const [datevalue, setDatevalue] = useState(null);
  const [tdy, setTdy] = useState(today());
  useEffect(() => {
    setDate(dateSelect(y, month, d));
    setDate2({ year: y, month: month, day: d });
  }, [y, m, month, d]);
  const inputAccept = (e) => {
    const element = e.target.value.replace(/[^0-9]/g, "");
    setNationalCode(element);
    setAccept(true);
  };
  const pickerHandler = () => {
    setBxPicker((e) => !e);
  };
  const inqueryHandler = async (e) => {
    e.preventDefault();
    const res = await inqueryProfile({
      national_code: `${nationalCode}`,
      birthdate: `${date2?.year}/${date2?.month}/${date2?.day}`,
      mobile: `${mobile}`,
      user_type: "real",
    });
    prgrsStep(counter, prgrsArray, accgreen, acc, setCounter);
    return res;
  };
  // const dateHandlervalue = (e)=>{
  //   const val = e.target.value;
  //   console.log("")
  //   setDateVal(val);
  // }

  // const { year, month, day } = date2;

  return (
    <form onSubmit={inqueryHandler} style={{ position: "relative" }}>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; کد ملی <span>*</span>
        </legend>

        <input
          value={nationalCode}
          onChange={inputAccept}
          type="text"
          maxLength={10}
        />
      </fieldset>
      <p>
      </p>
      <fieldset className={styles.fieldset} onClick={pickerHandler}>
        <legend>
          &nbsp; تاریخ تولد خود را انتخاب نمایید<span>*</span>
        </legend>
        <div className={styles.bxDate}>
          <span>
            <img src={calender} />
          </span>
          <input
            value={
              date &&
              `${date.d ? date.d : tdy[2]} / ${e2p(date.m)} / ${
                date.year ? date.year : tdy[0]
              }`
            }
            type="text"
            style={{ margin: "0", border: "none", padding: "0 5px" }}
          />
        </div>
      </fieldset>
      <div className={styles.containerPicker}>
        {/* <div onClick={pickerHandler} className={styles.pickerTetxt}>
           <span>
            {date
              ? `${date.d} / ${e2p(date.m)} / ${date.year}`
              : "تاریخ تولد خود را انتخاب نمایید"}
          </span>

          <img src={calender} />
        </div> */}

        {bxPicker && (
          <div className={styles.bxPicker}>
            {/* {countPicker === 1 && <span>روز</span>} */}
            {countPicker === 1 && (
              <MonthPicker
                month={month}
                setMonth={setMonth}
                day={day}
                e2p={e2p}
                setCountPicker={setCountPicker}
                setM={setM}
                setD={setD}
                toYear={toYear}
                y={y}
              />
            )}
            {countPicker === 2 && (
              <YearsPicker
                years={years}
                e2p={e2p}
                setCountPicker={setCountPicker}
                toYear={toYear}
                setY={setY}
                y={y}
                month={month}
              />
            )}
          </div>
        )}
      </div>
      {/* <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; کد ملی <span>*</span>
        </legend>
      </fieldset> */}
      {/* <DatePicker /> */}
      <input
        className={accept ? styles.accept : styles.notAccept}
        style={{ marginTop: "0" }}
        type="submit"
        value="تایید"
      />
    </form>
  );
}

export default Inquiry;
