import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  items: [],
};

const ShoppingBagContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BAG':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export const ShoppingBagProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShoppingBagContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingBagContext.Provider>
  );
};

export const useShoppingBag = () => useContext(ShoppingBagContext);

export default ShoppingBagProvider;
