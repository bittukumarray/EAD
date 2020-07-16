import axios from "axios";
import {
    GET_CROPS, CROP_ERROR,GET_CROP
} from "./types";


export const getCrops = ()=> async dispatch =>{
    try{
        console.log("in crop list");
        const res = await axios.get('/api/farmer/get-crops');
        // console.log(res.data);
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


//add to cart 
export const addToCart = (userId, cropId) => async dispatch =>{
  try{
    console.log("adding to cart", cropId,userId);

  }
  catch(err){
   console.log("error")
  }
}


// //Get Crop
// export const getCrop = id => async dispatch => {
//     try{
//         // console.log(id);
//         console.log("in get a single crop")
//         const res = await axios.get(`/api/farmer/get-crop/${id}`);
//         console.log(res.data.crop);
//         dispatch({
//             type:GET_CROP,
//             payload:res.data.crop
//         })
//     }
//     catch(err){
//         console.log("err")
//         dispatch({
//             type:CROP_ERROR,
//             payload: { msg: err.response.statusText, status: err.response.status }
//         })
//     }

// }



// Get crop
export const getCrop = id => async dispatch => {
    try {
      const res = await axios.get(`/api/farmer/get-crop/${id}`);
        console.log(res.data.crop);
        console.log("in actions")
      dispatch({
        type: GET_CROP,
        payload: res.data.crop
      });
    } catch (err) {
      dispatch({
        type: CROP_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  