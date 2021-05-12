import {takeEvery, put, call, select} from 'redux-saga/effects';
import sendRequestRandom from '../../../../services/api/requestRandom';
import { setAllRecipesForHomeScreen } from '../redux/actions';
import { constants } from './actions';



function* workerHomeScreen() {
    const dataRecipes = yield call(sendRequestRandom);
    yield put(setAllRecipesForHomeScreen(dataRecipes))
}


export function* watcherHomeScreen() {
    yield takeEvery(constants.HOME_SCREEN_WATCHER, workerHomeScreen)
}