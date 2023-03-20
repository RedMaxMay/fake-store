import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function CategoryItem({ item }) {
  return (
    <div className={s.category}>
      <Link to={`/products/${item}`}>{item}</Link>
    </div>
  );
}
