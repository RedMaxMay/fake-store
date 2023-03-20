import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import s from "./style.module.css";

export default function CategoriesPage() {
  const categories = useSelector((state) => state.categories);
  return (
    <div className={s.container}>
      <h1>All categories:</h1>
      <div className={s.categories}>
        {categories.map((item) => (
          <CategoryItem key={item} item={item} />
        ))}
      </div>
    </div>
  );
}
