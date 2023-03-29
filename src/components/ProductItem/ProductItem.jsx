import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addToBasketAction } from "../../store/reducer/basketReducer";
import s from "./style.module.css";

export default function ProductItem({
  id,
  title,
  price,
  description,
  category,
  thumbnail,
}) {
  const dispatch = useDispatch();

  return (
    <div className={s.product}>
      <div className={s.product_img_wrap}>
        <Link className={s.product_img} to={`/product/${id}`}>
          <img className={s.product_img} src={thumbnail} alt={title} />
        </Link>
      </div>
      <p className={s.product_price}>{price} $</p>
      <p className={s.product_title}>{title}</p>
      <NavLink to={`/products/${category}`}>{category}</NavLink>
      <button
        className={s.product_btn}
        onClick={() => dispatch(addToBasketAction(id))}
      >
        Add to Basket
      </button>
      <Link className={s.product_link_btn} to={`/product/${id}`}>
        View all details
      </Link>
      <p className={s.product_description}>{description}</p>
    </div>
  );
}
