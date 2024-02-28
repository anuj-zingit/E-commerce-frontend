import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { getProductDetailReducer, getProductReducer } from "./reducer/ProductReducer";
import { CardReducer } from "./reducer/CardReducer";

const reducer=combineReducers(
    {
        getProducts:getProductReducer,
        getProductDetail:getProductDetailReducer,
        cartItem:CardReducer
    }
)
const middleware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;