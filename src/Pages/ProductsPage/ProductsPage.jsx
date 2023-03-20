import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./style.module.css";

export default function AllProductsPage() {
  const { category } = useParams();

  const categories = useSelector((state) => state.categories);

  const products = useSelector(({ products }) => {
    if (category === undefined) {
      return products;
    } else {
      return products.filter((prod) => prod.category === category);
    }
  });

  const checkActive = ({ isActive }) => (isActive ? s.active : "");

  return (
    <div className={s.products}>
      <h1>{category === undefined ? "All Products Page" : `${category}`}</h1>

      <div className={s.products_categories}>
        <NavLink className={checkActive} to="/products/all">
          ALL
        </NavLink>
        {categories.map((cat) => (
          <NavLink className={checkActive} key={cat} to={`/products/${cat}`}>
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
