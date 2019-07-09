import alphabetReducer from "./alphabetReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  alphabet: alphabetReducer
});

export default rootReducer;
