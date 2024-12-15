import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoBar from "../Templates/LogoBar";
// import gifArrow from "../../images/gifArrow.gif";
import downarrow from "../../images/downarrow.gif";
import { arraySpan, tknReq } from "../../Services/instance";
import { tokenData } from "../../Services/funcRequest";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { store } from "../../redux/store";
// import { fetchToken } from "../../Services/funcRequest";
// import { useSelector, useDispatch, Provider } from "react-redux";
import styles from "./layout.module.css";
import { useQuery } from "react-query";
function Layout({ children }) {
  // const tkn = useSelector((state) => state.token);
  // console.log(tkn);
  // const dispatch = useDispatch();
  const [state, setState] = useState("");
  const [clr, setClr] = useState("");
  const [palletBox, setPalletBox] = useState(false);
  const { data } = useQuery({
    // mutationFn: tokenData(tknReq),
    queryKey: ["uhyh"],
    queryFn: () => tokenData(tknReq),
  });
  useEffect(() => {
    // dispatch(fetchToken());
    // tokenData(tknReq);
    data;
  }, []);

  const clickpallet = (e) => {
    const element = e.target;
    if (element === "SPAN") return;
    setClr(e.nativeEvent.explicitOriginalTarget.attributes.back.value);
    setState(e.target.title);
    // setClr(e.dataset)
    // console.log(clr)
    // console.log(e.target.title);
  };

  const togglePallet = () => {
    setPalletBox((e) => !e);
  };

  // console.log("token_cast", data);
  return (
    // <Provider store={store}>
    <section className={styles.container}>
      {/* {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))} */}
      <div className={styles.children} state={state}>
        {children}
      </div>
      <div className={styles.palletClr}>
        {palletBox && (
          <div onClick={clickpallet}>
            {arraySpan.map((item) => (
              <span
                key={item.id}
                back={item.back}
                title={item.title}
                style={item.style}
              ></span>
            ))}
          </div>
        )}

        <p onClick={togglePallet}>
          <img
            style={{
              rotate: palletBox && "180deg",
              transition: "all 0.5s ease-out",
            }}
            src={downarrow}
          />
        </p>
      </div>

      <LogoBar state={state} clr={clr} />
      <ToastContainer />
    </section>
    // </Provider>
  );
}

export default Layout;
