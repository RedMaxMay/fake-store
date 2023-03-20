import { categoriesLoadAction } from "../reducer/categoriesReducer";

export const asyncLoadCategoriesAction = async (dispatch) => {
  const resp = await fetch("https://dummyjson.com/products/categories");
  const data = await resp.json();
  dispatch(categoriesLoadAction(data));
};
