import React from "react";

import Header from "../Components/Header_Footer/header";

function layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default layout;
