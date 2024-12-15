import React, { useEffect } from "react";

function HomeLogin() {
  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("login");
    }, 6000);
  }, []);
  return (
    <div>
      <h2>خوش آمدید به پرتال</h2>
    </div>
  );
}

export default HomeLogin;
