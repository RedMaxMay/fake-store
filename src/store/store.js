import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./reducer/basketReducer";
import { categoriesReducer } from "./reducer/categoriesReducer";
import { productsReducer } from "./reducer/productsReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  basket: basketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
