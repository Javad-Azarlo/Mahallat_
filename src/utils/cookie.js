import { useEffect } from "react";
import { useState } from "react";

const setCookie = (token) => {
  document.cookie = `token=${token} ; max-age=${60 * 24 * 60 * 60}`;
};
const getCookie = () => {
  const cookie_loc = document.cookie;
  if (cookie_loc) {
    const arry_cook = cookie_loc.split("=");
    return {
      [arry_cook[0]]: arry_cook[1],
    };
  }
};

/////
const useLocal = async (key, initial) => {
  const [val, setVal] = useState(() => {
    const localState = localStorage.getItem(key);
    return localState ? JSON.parse(localState) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val]);
  return [val, setVal];
};

/////

// const setlclStrgLogin = (login) => {
//   const set = localStorage.setItem("login", JSON.stringify(login));
//   const get = localStorage.getItem("login");
//   return { set, get };
// };

// const getlclStrgLogin = () => {
//   return localStorage.getItem("login");
// };
export { setCookie, getCookie, useLocal };
