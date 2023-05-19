import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { IState } from "../../model/interfaces/IState";
import { PostReducer } from "../reducers/PostReducer/PostReducer";
import { TodoReducer } from "../reducers/Todo/TodoReducer";

const rootReducers=combineReducers<IState>({
    todo: TodoReducer,
    posts: PostReducer
})

export const store = createStore(rootReducers,applyMiddleware(thunk))