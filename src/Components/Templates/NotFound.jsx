import React from "react";
import notFound from "../../images/404.png";
function NotFound() {
  return (
    <div>
      <img src={notFound} alt=""  style={{maxWidth : "100%"}}/>
    </div>
  );
}

export default NotFound;
