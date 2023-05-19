import {DELETE_COMMENT, POST_COMMENT, REPLY_COMMENT, UPDATE_COMMENT, SHARE_POST, LOAD_MORE, LOAD_MORE_NESTED_POST, LOAD_DATA, LIKE_COMMENT} from "../actionType/PostActionType"

export const deleteComment=(parentId:string, nestedId:string, count:number)=>({
    type:DELETE_COMMENT,
    payload:{parentId,nestedId,count}
})
export const loadData=()=>({
    type:LOAD_DATA
})
export const postComment=(name:string)=>({
    type:POST_COMMENT,
    payload:name
})

export const updateComment=(name:string)=>({
    type:UPDATE_COMMENT,
    payload:name
})

export const replyComment=(name:string)=>({
    type:REPLY_COMMENT,
    payload:name
})

export const sharePost=(name:string)=>({
    type:SHARE_POST,
    payload:name
})
export const loadMore=(count:number)=>({
    type:LOAD_MORE,
    payload:count
})
export const loadMoreNestedPost=(parentId:string, nestedId:string, count:number)=>({
    type:LOAD_MORE_NESTED_POST,
    payload:{parentId,nestedId,count}
})
export const likeComment=(parentId:string, nestedId:string, count:number)=>({
    type:LIKE_COMMENT,
    payload:{parentId,nestedId,count}
})

