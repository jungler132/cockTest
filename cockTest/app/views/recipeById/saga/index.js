import {takeEvery, put, call, select} from 'redux-saga/effects';
import { constants } from './actions';
import sendRequestById from '../../../services/api/requestById';
import { getRecipeIdForMap } from '../../../modules/saga/selectors';
import { setRecipeIdData } from '../redux/actions'

function* workerRecipeByIdScreen() {
    
    const recipeIdforRequest = yield select(getRecipeIdForMap)
    const recipeIdData = yield call(sendRequestById,recipeIdforRequest)
    yield put(setRecipeIdData(recipeIdData))
    
}


export function* watcherRecipeById() {
    yield takeEvery(constants.RECIPEBYID_SCREEN_WATCHER, workerRecipeByIdScreen)
}