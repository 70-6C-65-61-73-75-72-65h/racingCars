// import Modal from "./modal";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import Races from "./races";
import SheduledRaces from "./sheduledRaces";
// import User from "./user";

const reducers = combineReducers({ Races, SheduledRaces });
export default reducers;
export type RootState = ReturnType<typeof reducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
