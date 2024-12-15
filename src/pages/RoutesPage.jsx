import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Registration from "../Components/Templates/Registration";
import Login from "../Components/Templates/Login";
import ForgotPass from "../Components/Templates/ForgotPass";
import NotFound from "../Components/Templates/NotFound";
import LoginCode from "../Components/Templates/LoginCode";
import FollowRequest from "../Components/Templates/FollowRequest";
import HomeLogin from "../Components/Templates/HomeLogin";
import LoginResend from "../Components/Templates/LoginResend";
// import { getlclStrgLogin } from "../utils/cookie";
// import AcceptCode from "../Components/Templates/AcceptCode";

function RoutesPage({ state, code, setCode, getlocal }) {
  // const [local, setLocal] = useLocal("login", "");
  const [lcl, setLcl] = useState("");
  const [mobile, setMobile] = useState("");
  const [otpNew, setOtpNew] = useState("");
  const [capth, setCapth] = useState(
    Math.floor(Math.random() * 280000).toString()
  );
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            !lcl ? (
              <Login
                code={code}
                setCode={setCode}
                setLcl={setLcl}
                lcl={lcl}
                setCapth={setCapth}
                capth={capth}
                setPass={setPass}
                pass={pass}
                setUser={setUser}
                user={user}
              />
            ) : (
              <Navigate to="/homeLogin" />
            )
          }
        />
        {/* <Route index element={<Login code={code} setCode={setCode} />} /> */}
        <Route
          path="Registration"
          element={
            <Registration
              code={code}
              setCode={setCode}
              setCapth={setCapth}
              capth={capth}
              setMobile={setMobile}
              mobile={mobile}
              otpNew={otpNew}
              setOtpNew={setOtpNew}
              setPass={setPass}
              pass={pass}
              setUser={setUser}
              user={user}
            />
          }
        />
        <Route
          path="ForgotPass"
          element={
            <ForgotPass
              code={code}
              setCode={setCode}
              setCapth={setCapth}
              capth={capth}
              otpNew={otpNew}
              setOtpNew={setOtpNew}
            />
          }
        />
        <Route
          path="loginCode"
          element={
            <LoginCode
              code={code}
              setCode={setCode}
              setCapth={setCapth}
              capth={capth}
              setMobile={setMobile}
              mobile={mobile}
              otpNew={otpNew}
              setOtpNew={setOtpNew}
              setLcl={setLcl}
              setPass={setPass}
              pass={pass}
              setUser={setUser}
              user={user}
            />
          }
        />
        <Route
          path="followRequest"
          element={<FollowRequest code={code} setCode={setCode} />}
        />
        {/* <Route path="acceptCode" element={<AcceptCode />} /> */}
        {/* <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : <AuthPage/>} /> */}

        <Route
          path="/homeLogin"
          element={
            lcl ? (
              <HomeLogin code={code} setCode={setCode} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        {/* <Route
          path="/LoginResend"
          element={
            <LoginResend
              setMobile={setMobile}
              mobile={mobile}
              otpNew={otpNew}
              setOtpNew={setOtpNew}
              setLcl={setLcl}
              setPass={setPass}
              pass={pass}
              setUser={setUser}
              user={user}
            />
          }
        /> */}
        {/* <Route path="/home" element={<HomeLogin />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
