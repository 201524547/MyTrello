import { fork } from "redux-saga/effects";
import { watchUserSaga } from "./app.saga";

export default function* rootSaga(){
    yield fork(watchUserSaga)
}