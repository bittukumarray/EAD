import { CROPSINFO } from "../actions/types";
const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CROPSINFO:
        return [...state, payload];
      default:
        return state;
    }
  }