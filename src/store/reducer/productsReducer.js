const PRODUCTS_LOAD = "PRODUCTS_LOAD";
const PRODUCTS_SEARCH_FILTER = "PRODUCTS_SEARCH_FILTER";
const PRODUCTS_RESET_FILTER = "PRODUCTS_RESET_FILTER";
const PRODUCTS_SORT_FILTER = "PRODUCTS_SORT_FILTER";

export const productsLoadAction = (payload) => ({
  type: PRODUCTS_LOAD,
  payload,
});

export const productsSearchFilterAction = (payload) => ({
  type: PRODUCTS_SEARCH_FILTER,
  payload,
});

export const productsResetFilterAction = (payload) => ({
  type: PRODUCTS_RESET_FILTER,
  payload,
});

export const productsSortFilterAction = (payload) => ({
  type: PRODUCTS_SORT_FILTER,
  payload,
});

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_LOAD:
      return action.payload.map((item) => ({ ...item, show: true }));

    case PRODUCTS_SEARCH_FILTER:
      return state.map((item) => ({
        ...item,
        show: item.title.toLowerCase().includes(action.payload.toLowerCase()),
      }));

    case PRODUCTS_RESET_FILTER:
      return state.map((item) => ({ ...item, show: true }));

    case PRODUCTS_SORT_FILTER:
      const normal = [...state];
      if (action.payload === "1") {
        return [...state.sort((a, b) => a.price - b.price)];
      } else if (action.payload === "2") {
        return [...state.sort((a, b) => b.price - a.price)];
      }
      return [...state.sort((a, b) => a.id - b.id)];

    default:
      return state;
  }
};
