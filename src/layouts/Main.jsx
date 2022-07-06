import React, { Component } from "react";
import { Outlet } from "react-router-dom";
//COMPONENTS
import Navbar from "../components/Navbar";

import "../index.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

export default Main;
