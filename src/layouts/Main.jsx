import React, { Component } from "react";
import { Outlet } from "react-router-dom";
//COMPONENTS
import Navbar from "../components/Navbar";
import MiniCart from "../components/MiniCart";

import "../index.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MiniCart />
        <Outlet />
      </div>
    );
  }
}

export default Main;
