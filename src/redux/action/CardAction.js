import * as actionTypes from '../constant/CardConstant'
import axios from "axios";


const url = "http://localhost:3000";

export const AddToCart=(id,quantity)=>async (dispatch)=> {
    try {
        // Send a GET request to fetch products from the server.
        let { data } = await axios.get(`${url}/product/${id}`);
        // Dispatch a success action with the fetched data.
        dispatch({ type: actionTypes.Add_To_Cart, payload: {...data,quantity} });
    } catch (error) {
        // Dispatch a failure action with the error message if the request fails.
        dispatch({ type: actionTypes.Add_To_Cart_Error, payload: error.message });
        console.log(error, 'getProductReducer err');
    }
}

// Your action file
export const Remove_From_Cart = (id) => (dispatch) => {
    console.log(id,'oooo')
    dispatch({
        type: actionTypes.Remove_From_Cart,
        payload: id
    });
};
