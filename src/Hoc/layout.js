import React from "react";

import Header from "../Components/Header_Footer/header";
import Footer from "../Components/Header_Footer/footer";

function layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default layout;
