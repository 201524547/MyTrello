import {combineReducers} from "redux"
import boardReducer from "../board/util/board.reducer"

const rootReducer = combineReducers({
    boardReducer,
});

export default rootReducer;