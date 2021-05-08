import { CommonActions } from '@react-navigation/routers';
import {put, delay,takeEvery , call} from 'redux-saga/effects';
import { navigate } from '../../../services/navigationServices';
import { constants } from '../redux/constant';


export function* workerForLaunch() {
    yield delay(3000);
    yield call(navigate, 'BottomTabs' , {screen:'Home'})
}

export function* watcherLaunch() {
    yield takeEvery(constants.SET_START, workerForLaunch);
    
}
