import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

export default function Header() {
  const checkActive = ({ isActive }) => (isActive ? s.active : "");
  return (
    <header className={s.header}>
      <nav>
        <NavLink className={checkActive} to="/">
          Categories
        </NavLink>
        <NavLink className={checkActive} to="/products/all">
          All products
        </NavLink>
        <NavLink className={checkActive} to="/basket">
          Basket
        </NavLink>
      </nav>
    </header>
  );
}
