import axios from "axios";
import {
    GET_CROPS, CROP_ERROR
} from "./types";


export const getCrops = ()=> async dispatch =>{
    try{
        const res = await axios.get('/api/farmer/get-crops');
        console.log(res.data);
        dispatch({
            type:GET_CROPS,
            payload:res.data.crops
        })

    }catch(err){
        dispatch({
            type:CROP_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}