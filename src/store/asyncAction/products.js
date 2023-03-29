import { productsLoadAction } from "../reducer/productsReducer";

export const asyncLoadProductsAction = async (dispatch) => {
  const resp = await fetch("https://dummyjson.com/products?skip=0&limit=100");
  const data = await resp.json();
  dispatch(productsLoadAction(data.products));
};
