import React from "react";
import { useDispatch } from "react-redux";
import {
  productsSearchFilterAction,
  productsSortFilterAction,
} from "../../store/reducer/productsReducer";
import s from "./style.module.css";

export default function ProductsFilterBar() {
  const dispatch = useDispatch();

  const inputHandle = (e) => {
    dispatch(productsSearchFilterAction(e.target.value));
  };

  const sortOnChange = (e) => {
    dispatch(productsSortFilterAction(e.target.value));
  };

  return (
    <div className={s.filter_bar}>
      <input type="text" placeholder="Search..." onChange={inputHandle} />
      <select name="" id="" onChange={sortOnChange}>
        <option value="1">Price - Low to High</option>
        <option value="2">Price - High to Low</option>
        <option value="3">Normal</option>
      </select>
    </div>
  );
}
