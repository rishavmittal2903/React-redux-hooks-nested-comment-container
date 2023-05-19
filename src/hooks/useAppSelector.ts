import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { IState } from "../model/interfaces/IState";

export const useAppSelector:TypedUseSelectorHook<IState>=useSelector;