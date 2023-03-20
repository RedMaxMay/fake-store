import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { categoriesReducer } from "./reducer/categoriesReducer";
import { productsReducer } from "./reducer/productsReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));