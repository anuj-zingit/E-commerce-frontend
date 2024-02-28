import * as actionTypes from '../constant/CardConstant';

export const CardReducer = (state = { cartItems: [] }, action) => {
  console.log(action, 'item');
  switch (action.type) {
    case actionTypes.Add_To_Cart:
      const item = action.payload;
      const exist = state.cartItems.find((product) => product.id === item.id);
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) => (data.id === exist.id ? item : data)),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
      case actionTypes.Remove_From_Cart: // Adjusted action type here
      return {
        ...state,
        cartItems: state.cartItems.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};
