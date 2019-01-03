import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Hoc/layout";

function routes(props) {
  return (
    <Layout>
      <Switch />
    </Layout>
  );
}

export default routes;
