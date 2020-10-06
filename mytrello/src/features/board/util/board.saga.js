import {all, select, takeEvery,call, put} from 'redux-saga/effects'
import { createListStart, initializeBoardStart, initializeBoardSuccess, selectBoard, selectBoardIds } from './board.reducer'

function save(ids, entities){
    localStorage.setItem('ids', JSON.stringify(ids));
    localStorage.setItem('entities', JSON.stringify(entities));
}

function load() {
    const ids = localStorage.getItem("ids");
    const entities = localStorage.getItem("entities");
    return {
        ids: JSON.parse(ids),
        entities: JSON.parse(entities),
    }
}

export function* syncBoard(){
    const ids = yield select(selectBoardIds);
    const boards = yield select(selectBoard);

    yield call(save, ids, boards);
}

export function* loadBoard(){
    const {ids, entities} = yield call(load);
    console.log(ids);

    if(!ids || !entities) return;
    yield put(initializeBoardSuccess(ids, entities))
}

export function* watchBoardSaga(){
    yield all([
        takeEvery(createListStart.type,syncBoard),
        takeEvery(initializeBoardStart.type, loadBoard)
    ])
}