import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementAction,
  deleteFromBasket,
  incrementAction,
} from "../../store/reducer/basketReducer";
import s from "./style.module.css";

export default function BasketItem({ id, count, price, thumbnail, title }) {
  const dispatch = useDispatch();

  return (
    <div className={s.basket_item}>
      <div className={s.img_wrap}>
        <img src={thumbnail} alt={title} />
      </div>
      <p>{title}</p>
      <p>
        {price} * {count} = <b>{price * count}</b>
      </p>
      <div className={s.btns}>
        <div>
          <button onClick={() => dispatch(decrementAction(id))}>-</button>
          <button onClick={() => dispatch(incrementAction(id))}>+</button>
        </div>
        <button onClick={() => dispatch(deleteFromBasket(id))}>Del</button>
      </div>
    </div>
  );
}
