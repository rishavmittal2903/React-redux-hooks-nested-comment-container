import { OPERATION } from "../../../model/interfaces/enum";
import { IAction } from "../../../model/interfaces/IAction";
import { appendNestedCountWithPosts, updateNestedPostPostByKey } from "../../../shared/Utility";
import { __mockPostData__ } from "../../../__mock__/PostMockData";
import {
  DELETE_COMMENT,
  POST_COMMENT,
  REPLY_COMMENT,
  UPDATE_COMMENT,
  SHARE_POST,
  LOAD_MORE,
  LOAD_MORE_NESTED_POST,
  LOAD_DATA,
  LIKE_COMMENT,
} from "../../actionType/PostActionType";
import { InitialState } from "./initialState";

export const PostReducer = (state = InitialState, action: IAction) => {
  switch (action.type) {
    case DELETE_COMMENT: {
      const {parentId, nestedId,count}=action.payload
      return {
        ...state,
        postData: updateNestedPostPostByKey(parentId, nestedId,state.postData,count,"",OPERATION.DELETE)
      };
    }
    case POST_COMMENT: {
      return { ...state, name: action.payload };
    }
    case REPLY_COMMENT: {
      return { ...state, name: action.payload };
    }
    case UPDATE_COMMENT: {
      return { ...state, name: action.payload };
    }
    case SHARE_POST: {
      return { ...state, name: action.payload };
    }
    case LOAD_MORE: {
      return { ...state, currentLoadedNumber: action.payload };
    }
    case LOAD_DATA: {
        return { ...state, postData: appendNestedCountWithPosts(__mockPostData__) };
      }
    case LOAD_MORE_NESTED_POST: {
      const {parentId, nestedId,count}=action.payload
      return {
        ...state,
        postData: updateNestedPostPostByKey(parentId, nestedId,state.postData,count,"nestedCommentCount")
      };
    }
    case LIKE_COMMENT: {
      const {parentId, nestedId,count}=action.payload
        return {
          ...state,
          postData: updateNestedPostPostByKey(parentId, nestedId,state.postData,count,"numberOfLikes")
        };
    }
    default: {
      return { ...state };
    }
  }
};
