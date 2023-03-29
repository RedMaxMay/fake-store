import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBasketAction } from "../../store/reducer/basketReducer";
import s from "./style.module.css";

export default function BasketCalculation() {
  const { basket, products } = useSelector((state) => state);
  const totalCount = basket.reduce((sum, prod) => sum + prod.count, 0);
  const totalSum = basket.reduce((sum, prod) => {
    const product = products.find((item) => item.id === prod.id);
    return sum + product.price * prod.count;
  }, 0);
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <p>Total products: {totalCount}</p>
      <p>Total sum: {totalSum}</p>
      <button
        className={s.del_btn}
        onClick={() => dispatch(clearBasketAction())}
      >
        Delete All Products
      </button>
    </div>
  );
}
