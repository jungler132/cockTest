import { put, select, takeEvery, call } from "@redux-saga/core/effects";
import { constants } from './actions'
import { getMealNameForRequest } from '../../../modules/saga/selectors'
import sendRequestByName from '../../../services/api/requestByName'
import { setMealDataForShow } from '../redux/actions'

function* workerMealByNameScreen() {

    const mealNameForRequest = yield select(getMealNameForRequest);
    const mealByNameData = yield call(sendRequestByName, mealNameForRequest)
    yield put(setMealDataForShow(mealByNameData))
}


export function* watcherMealByNameScreen() {
    yield takeEvery(constants.MEALS_BY_NAME_WATCHER , workerMealByNameScreen)
}