import * as actionType from '../constant/ProductConstant';


// state is initial state
export const getProductReducer = (state={products:[]}, action) => {
    switch (action.type) {
    case actionType.Get_Product_Success:return {products:action.payload};
    case actionType.Get_Product_Failed:return{error:action.payload};
    default:return state;
}
}

export const getProductDetailReducer =(state={product:{}}, action )=>{
    switch(action.type){
        case actionType.GET_Product_Detail_Request:return{loading:true};
        case actionType.GET_Product_Detail_Success:return{loading:false,product:action.payload};
        case actionType.GET_Product_Detail_Failed:return{loading:false,err:action.payload};
        case actionType.GET_Product_Detail_Reset:return{product:{}};
        default:return state;
    }
}