import React from "react";
//import { MenuList } from "../helpers/MenuList";
//import MenuItem from "../components/MenuItem";
import "../styles/Admin.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Admin-Login</h1>
      <form id="login-form" method="POST">
          <label htmlFor="name">Email</label>
          <input name="email" placeholder="Enter email ..." type="email" />
          <label htmlFor="email">Email</label>
          <input name="password" placeholder="Enter password..." type="password" />
          <button type="submit"> Login</button>
        </form>
    </div>
  );
}

export default Menu;