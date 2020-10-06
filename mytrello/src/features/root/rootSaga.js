import { watchBoardSaga } from "../board/util/board.saga"
import {fork} from "redux-saga/effects"

export function* rootSaga(){
    yield fork(watchBoardSaga)
}