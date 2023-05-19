import { IComment } from "./IComment";

export interface IPost{
    postData: Array<IComment>;
    maxCount:number,
    currentLoadedNumber:number,
    nestedMaxCount:number
}