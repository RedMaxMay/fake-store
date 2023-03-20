const PRODUCTS_LOAD = "PRODUCTS_LOAD";

export const productsLoadAction = (payload) => ({
  type: PRODUCTS_LOAD,
  payload,
});


export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_LOAD:
      return action.payload;

    default:
      return state;
  }
};
