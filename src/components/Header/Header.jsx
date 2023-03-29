import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CustNavLink from "../CustNavLink/CustNavLink";
import s from "./style.module.css";

export default function Header() {
  const { basket } = useSelector((state) => state);
  const totalCount = basket.reduce((sum, prod) => sum + prod.count, 0);

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
        <NavLink className={checkActive} to="/basket" count={totalCount}>
          Basket
        </NavLink>
      </nav>
    </header>
  );
}
