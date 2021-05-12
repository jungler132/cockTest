import {takeEvery, put, call, select} from 'redux-saga/effects';
import sendRequest from '../../../../services/api/request'
import { setAllRecipesForHomeScreen } from '../redux/actions';
import { constants } from './actions';



function* workerHomeScreen() {
    const dataRecipes = yield call(sendRequest);
    yield put(setAllRecipesForHomeScreen(dataRecipes))
}


export function* watcherHomeScreen() {
    yield takeEvery(constants.HOME_SCREEN_WATCHER, workerHomeScreen)
}