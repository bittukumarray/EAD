import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import cropsInfo from "./cropsInfo";
import crop from './crop';
export default combineReducers({
  alert,
  auth,
  cropsInfo:cropsInfo,
  crop
});
