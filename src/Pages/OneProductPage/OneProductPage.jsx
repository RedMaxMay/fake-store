import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToBasketAction } from "../../store/reducer/basketReducer";
import s from "./style.module.css";

export default function OneProductPage() {
  const { id } = useParams();
  const { products } = useSelector((state) => state);
  const product = products.find((prod) => prod.id === +id);
  const dispatch = useDispatch();

  return (
    <div className={s.product_wrap}>
      {product === undefined ? (
        <p className={s.loading}>Loading...</p>
      ) : (
        <div>
          <h1>{product.title}</h1>
          <div className={s.img_wrap}>
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div>
            <p className={s.price}>{product.price}$</p>
            <button
              className={s.product_btn}
              onClick={() => dispatch(addToBasketAction(product.id))}
            >
              Add to Basket
            </button>
            <p className={s.description}>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
