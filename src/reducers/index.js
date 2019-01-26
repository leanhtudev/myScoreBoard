import { combineReducers } from "redux";
import AddStatus from "./addStatus";
import list from "./usersList";

const MyReducers = combineReducers({
  AddStatus: AddStatus,
  list
});
export default MyReducers;
