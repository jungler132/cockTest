import {takeEvery, put, call, select} from 'redux-saga/effects';
import sendRequestRandom from '../../../../services/api/requestRandom';
import { constants } from './actions';
import { setMealNameFromSearchScreen } from '../redux/actions'


function* workerRandomRecipe() {
    const dataRecipes = yield call(sendRequestRandom);
    yield put(setMealNameFromSearchScreen(dataRecipes))
}


export function* watcherRandomRecipe() {
    yield takeEvery(constants.RANDOM_RECIPE_WATCHER, workerRandomRecipe)
}