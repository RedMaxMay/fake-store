import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import BasketPage from "../../Pages/BasketPage/BasketPage";
import CategoriesPage from "../../Pages/CategoriesPage/CategoriesPage";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import ProductsPage from "../../Pages/ProductsPage/ProductsPage";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";
import { asyncLoadProductsAction } from "../../store/asyncAction/products";
import Header from "../Header/Header";
import "./style.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadCategoriesAction);
    dispatch(asyncLoadProductsAction);
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<CategoriesPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
