import axios from "axios";
import {
  GET_CROPS, CROP_ERROR, GET_CROP, ADD_TO_CART_FAILED, ADD_TO_CART_SUCCESSFULL
} from "./types";


export const getCrops = () => async dispatch => {
  try {
    console.log("in crop list");
    const res = await axios.get('/api/farmer/get-crops');
    dispatch({
      type: GET_CROPS,
      payload: res.data.crops
    })

  } catch (err) {
    dispatch({
      type: CROP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}


//add to cart 
export const addToCart = (farmerId, cropsId, quantity) => async dispatch => {
  try {
    let body = {
      farmerId: farmerId,
      cropsId: cropsId,
      quantity: quantity,
      role: "genuser"
    }
    const res = await axios.post('/api/user/add-cart', body);
    dispatch({
      type: ADD_TO_CART_SUCCESSFULL,
      payload: { cart: res.data.cart, msg: res.data.msg, status: res.data.status }
    })

  }
  catch (err) {
    dispatch({
      type: ADD_TO_CART_FAILED,
      payload: { msg: err.response.msg, crops: {}, status: err.response.status }
    })
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
