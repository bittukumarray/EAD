import {GET_CROPS,CROP_ERROR } from '../actions/types';
const initialState = {
    crops:[],
    crop:null,
    error:{}
}

export default function(state = initialState, action){
    const {type , payload} = action;
    switch(type){
        case GET_CROPS:
        return {
            ...state,
            crops:payload
        };
        case CROP_ERROR:
            return {
              ...state,
              error: payload,
            };
        default:
            return state;
    }
}