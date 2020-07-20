import { GET_CROPS, CROP_ERROR, GET_CROP, ADD_TO_CART_FAILED, ADD_TO_CART_SUCCESSFULL } from '../actions/types';

const initialState = {
    crops: [],
    crop: "",
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_CROPS:
            console.log("in case details");

            return {
                ...state,
                crops: payload,
                loading: false

            };
        case GET_CROP:
            console.log("in case list");
            console.log(payload);
            return {
                ...state,
                crop: payload,
                loading: false

            };
        case CROP_ERROR:
            return {
                ...state,
                error: payload,
                loading: false

            };
        case ADD_TO_CART_SUCCESSFULL:
            return {
                ...state,
                addCartData: payload
            }
        case ADD_TO_CART_FAILED:
            return {
                ...state,
                addCartData: payload
            }
        default:
            return state;
    }
}