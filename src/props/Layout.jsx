import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

function Layout() {
  return (
    <div>
      <Header name="header" />
      <Main name="main" />
      <Sidebar name="sidebar" />
    </div>
  );
}

export default Layout;
