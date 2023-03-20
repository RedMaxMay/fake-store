import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./style.module.css";

export default function AllProductsPage() {
  const { products, categories } = useSelector((state) => state);

  const checkActive = ({ isActive }) => (isActive ? s.active : "");

  return (
    <div className={s.products}>
      <h1>All Products Page</h1>

      <div className={s.products_categories}>
        <NavLink className={checkActive} to="/products/all">
          ALL
        </NavLink>
        {categories.map((cat) => (
          <NavLink className={checkActive} key={cat} to={`/category/${cat}`}>
            {cat}
          </NavLink>
        ))}
      </div>

      {products.map((prod) => (
        <ProductItem key={prod.id} {...prod} />
      ))}
    </div>
  );
}
