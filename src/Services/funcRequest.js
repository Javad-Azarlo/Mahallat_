import api from "./config";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loading: false,
//   data: [],
//   error: "",
// };

// const fetchToken = createAsyncThunk("token/fetchToken", () => {
//   return api
//     .post("token/get")
//     .then((res) => res.json())
//     .then((data) => data);
// });
// const tokenSlice = createSlice({
//   name: "token",
//   initialState,
//   extraReducers: (Builder) => {
//     Builder.addCase(fetchToken.pending, (state, action) => {
//       state.loading = true;
//     });
//     Builder.addCase(fetchToken.fulfilled, (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//       state.error = "";
//     });
//     Builder.addCase(fetchToken.rejected, (state, action) => {
//       state.loading = false;
//       state.data = [];
//       state.error = action.error.message;
//     });
//   },
// });

const tokenData = async (data) => {
  // console.log('data' , data)
  // return await api.post("token/get", data);
  const response = await api.post("token/get", data);

  // console.log("cast_id", response);
  return response;
};
//ثبت نام
const mobileCode = async (data) => {
  console.log("کد موبایل ثبت نام", data);
  const res = await api.post("register/mobile", data);
  console.log("mobile", res);
  return res;
};
//کد تاییدیه موبایل
const verifyCode = async (data) => {
  console.log("veruficationCode", data);
  const res = await api.post("register/verify", data);
  console.log("verifyCODE", res);

  // if (status == "26") {
  //   document.cookie = `verifi=okverifi ; max-age=${24 * 60 * 60 }`;
  // } else {
  //   document.cookie = `verifi=noneverifi ; max-age=${24 * 60 * 60}`;
  // }
  // console.log("verify", res.status);
  return res;
};
//استعلام
const inqueryProfile = async (data) => {
  console.log("استعلام", data);
  const res = await api.post("register/inquiry_user", data);
  console.log("Estelam", res);
  return res;
};
//Login
const LoginAccount = async (data) => {
  console.log("login", data);
  const res = await api.post("login", data);
  console.log("loginRes", res);
  return res;
};
// فراموشی رمز عبور
const forgotPassCode = async (data) => {
  // console.log(data);
  const res = await api.post("forgetpass/inquiry", data);
  // console.log("forgot", res);
  return res;
};
// ارسال کد تاییدیه رمز عبور
const forgotResend = async (data) => {
  // console.log(data);
  const res = await api.post("forgetpass/verify", data);
  // console.log("forgotResend", res);
  return res;
};
// تغییر پسورد پروفایل
const changePassProf = async (data) => {
  console.log('changePass' , data);
  const res = await api.post("forgetpass/profile", data);
  console.log("changePassProf", res);
  return res;
};
// ثبت نام سریع با تلفن همراه
const resDsposable = async (data) => {
  // console.log('data' ,data);
  const res = await api.post("login/mobile", data);
  // console.log("Dsposable", res);
  return res
};
const resend = async (data) => {
  // console.log('data' ,data);
  const res = await api.post("login/mobile", data);
  // console.log("Dsposable", res);
  return res
};
const verifyResend = async (data) => {
  console.log('resend' ,data);
  const res = await api.post("login/vreify", data);
  console.log("resend_res", res);
  return res;
}
// export default tokenSlice.reducer
export {
  // tokenData,
  mobileCode,
  forgotPassCode,
  resDsposable,
  // fetchToken,
  tokenData,
  verifyCode,
  inqueryProfile,
  LoginAccount,
  verifyResend,
  resend,
  forgotResend,
  changePassProf
};
