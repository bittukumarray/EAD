import {GET_CROPS,CROP_ERROR, GET_CROP } from '../actions/types';

const initialState = {
    crops:[],
    crop:"",
    loading: true,
    error:{}
}

export default function(state = initialState, action){
    const {type , payload} = action;
    switch(type){
        case GET_CROPS:
        console.log("in case details");

        return {
            ...state,
            crops:payload,     
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
        default:
            return state;
    }
}