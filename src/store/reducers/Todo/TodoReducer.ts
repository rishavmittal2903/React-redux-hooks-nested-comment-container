import { IAction } from "../../../model/interfaces/IAction";
import { CHANGE_NAME } from "../../actionType/TodoActionType";
import { InitialState } from "./initialState";

export const TodoReducer=(state=InitialState, action:IAction)=>{
    switch(action.type)
    {
       
        case CHANGE_NAME:{
            return {...state,name:action.payload}
        }
        default :{
           return {...state}
        }
    }

}