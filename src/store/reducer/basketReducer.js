const ADD_TO_BASKET = "ADD_TO_BASKET";
const DELETE_FROM_BASKET = "DELETE_FROM_BASKET";
const CLEAR_BASKET = "CLEAR_BASKET";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const addToBasketAction = (payload) => ({
  type: ADD_TO_BASKET,
  payload,
});

export const deleteFromBasket = (payload) => ({
  type: DELETE_FROM_BASKET,
  payload,
});

export const clearBasketAction = () => ({
  type: CLEAR_BASKET,
});

export const incrementAction = (payload) => ({
  type: INCREMENT,
  payload,
});

export const decrementAction = (payload) => ({
  type: DECREMENT,
  payload,
});

const initialState = JSON.parse(localStorage.getItem("DummyProducts")) || [];

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const target = state.find((item) => item.id === action.payload);
      if (target) {
        target.count++;
        return [...state];
      } else {
        return [...state, { id: action.payload, count: 1 }];
      }
    }

    case DELETE_FROM_BASKET: {
      const newState = state.filter((prod) => prod.id !== action.payload);
      return [...newState];
    }

    case CLEAR_BASKET: {
      return [];
    }

    case INCREMENT: {
      const target = state.find((item) => item.id === action.payload);
      target.count++;
      return [...state];
    }

    case DECREMENT: {
      const target = state.find((item) => item.id === action.payload);

      if (target.count === 1) {
        const newState = state.filter((item) => item.id !== action.payload);
        return [...newState];
      }

      target.count--;
      return [...state];
    }

    default:
      return state;
  }
};
