import * as actionTypes from '../constant/ProductConstant'
import axios from "axios"
import { type } from "@testing-library/user-event/dist/type";
// import { Get_Product_Success,Get_Product_Failed } from "../constant/ProductConstant";
const url = "http://localhost:3000";
// use thunk for middle ware
export const getProduct = () => async (dispatch) => {
    try {
        // Send a GET request to fetch products from the server.
        let { data } = await axios.get(`${url}/getProducts`);
        console.log(data, 'products');

        // Dispatch a success action with the fetched data.
        dispatch({ type: actionTypes.Get_Product_Success, payload: data });
    } catch (error) {
        // Dispatch a failure action with the error message if the request fails.
        dispatch({ type: actionTypes.Get_Product_Failed, payload: error.message });
        console.log(error, 'getProductReducer err');
    }
}

export const getProductDetail = (id) => async (dispatch) => {
    try {
        // Dispatch a request action.
        dispatch({ type: actionTypes.GET_Product_Detail_Request });
        
        // Send a GET request to fetch the details of a specific product.
        let { data } = await axios.get(`${url}/product/${id}`);

        // Dispatch a success action with the fetched data.
        dispatch({ type: actionTypes.GET_Product_Detail_Success, payload: data });
    } catch (err) {
        // Dispatch a failure action with the error message if the request fails.
        dispatch({ type: actionTypes.GET_Product_Detail_Failed, payload: err });
    }
}
