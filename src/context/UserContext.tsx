import React from "react";
import { userContextData } from "../constants/AppConstant";
import { IUserContext } from "../model/interfaces/IUserContext";
const userContext = React.createContext<IUserContext>(userContextData);
export default userContext;