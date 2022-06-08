import rootReducer from "./store";
import {createStore} from "redux";

export const store = createStore(rootReducer);


