import axios from "axios";

import {
    CROPSINFO
} from "./types";


export const GetCropsInfo =  () => async dispatch => {
    try {
        const crops = await axios.get("/api/crops/info");
        console.log(crops);
        dispatch({
            type: CROPSINFO,
            payload: crops.data
        });
    }
    catch (err) {
        dispatch({
            type: CROPSINFO,
            payload: null
        })
    }
};