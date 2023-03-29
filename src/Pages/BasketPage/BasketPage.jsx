import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BasketCalculation from "../../components/BasketCalculation/BasketCalculation";
import BasketItem from "../../components/BasketItem/BasketItem";
import s from "./style.module.css";

export default function BasketPage() {
  const { basket, products } = useSelector((state) => state);
  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  useEffect(() => {
    localStorage.setItem("DummyProducts", JSON.stringify(data));
  }, [data]);
  

  if (products.length === 0) {
    return <div className={s.container}>LOADING....</div>;
  } else if (basket.length === 0) {
    return (
      <div className={s.container}>
        <h1>Basket:</h1>
        <p>Your basket is Empty :(</p>
      </div>
    );
  } else {
    return (
      <div className={s.container}>
        <h1>Basket:</h1>

        {data.map((item) => (
          <BasketItem key={item.id} {...item} />
        ))}

        <BasketCalculation />
      </div>
    );
  }
}
