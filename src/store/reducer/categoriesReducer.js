const CATEGORIES_LOAD = "CATEGORIES_LOAD";

export const categoriesLoadAction = (payload) => ({
  type: CATEGORIES_LOAD,
  payload,
});

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_LOAD:
      return action.payload;

    default:
      return state;
  }
};
