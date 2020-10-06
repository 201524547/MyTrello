import {delay, call, put, all, takeEvery, takeLatest} from 'redux-saga/effects'
import { fetchUserError, fetchUserStart, fetchUserSuccess } from './app.action';

const apiKey = ''

async function fetchUserAPI(name){
    const result =  await fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`).then(result => result.json())   
    return result;
}

function* fetchUserSaga(action){
    try{
        const name = action.payload;
        yield delay(500);
        const result = yield call(fetchUserAPI, name);
        yield put(fetchUserSuccess(result))
    }catch(err){
        yield put(fetchUserError());
    }
}

export function* watchUserSaga(){
    yield all([
        takeLatest(fetchUserStart.type, fetchUserSaga),
    ])
}