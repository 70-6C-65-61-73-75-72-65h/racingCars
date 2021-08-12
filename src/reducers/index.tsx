// import Modal from "./modal";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import Races from "./races";

const reducers = combineReducers({ Races });
export default reducers;
export type RootState = ReturnType<typeof reducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
