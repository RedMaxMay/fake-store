import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

export default function CustNavLink() {
  const { basket } = useSelector((state) => state);
  const totalCount = basket.reduce((sum, prod) => sum + prod.count, 0);

  const checkActive = ({ isActive }) =>
    [isActive ? s.active : "", s.link].join(" ");

  return (
    <NavLink data-count={totalCount} className={checkActive}>
      Корзина
    </NavLink>
  );
}
