import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import field from "./reducers/fieldReducer";
import form from "./reducers/formReducer";

export default createStore(
    combineReducers({
        math: math,
        user: user,
        field: field,
        form: form
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);