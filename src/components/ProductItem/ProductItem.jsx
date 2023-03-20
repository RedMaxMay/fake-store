import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

export default function ProductItem({
  id,
  title,
  price,
  description,
  category,
  thumbnail,
}) {
  return (
    <div className={s.product}>
      <div className={s.product_img_wrap}>
        <img className={s.product_img} src={thumbnail} alt={title} />
      </div>
      <p className={s.product_price}>{price}</p>
      <p className={s.product_title}>{title}</p>
      <NavLink to={`/products/${category}`}>{category}</NavLink>

      <button className={s.product_btn}>Add to Basket</button>
      <p className={s.product_description}>{description}</p>
    </div>
  );
}
