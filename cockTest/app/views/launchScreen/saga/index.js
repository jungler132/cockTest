import {put, delay, take} from 'redux-saga/effects';
import {setLaunchEndTrue, SET_START } from './actions';

export function* workerForLaunch() {
    yield delay(3000);
    yield put(setLaunchEndTrue(false));
}

export function* watcherLaunch() {
    yield take(SET_START, workerForLaunch);
}