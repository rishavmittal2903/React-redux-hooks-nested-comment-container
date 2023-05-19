import axios from "axios";
import { Dispatch } from "redux";
import { CHANGE_NAME } from "../actionType/TodoActionType";

export const ChangeName=(name:string)=>({
    type:CHANGE_NAME,
    payload:name
})

export const getData=()=>{
    return(dispatch:Dispatch)=>{
        return axios.get('').then((res:any)=>{
            dispatch(ChangeName(res));
        }).catch((err)=>{
            console.log(err);
        })
    }
}