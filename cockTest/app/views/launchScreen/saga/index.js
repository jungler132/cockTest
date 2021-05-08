import {put, delay,takeEvery} from 'redux-saga/effects';
import { constants } from '../redux/constant';
import {setLaunchEndTrue} from './actions';

export function* workerForLaunch() {
    yield delay(3000);
    yield put(setLaunchEndTrue(false));
}

export function* watcherLaunch() {
    yield takeEvery(constants.SET_START, workerForLaunch);
}
