import { constants } from './actions'
import { put, select, takeEvery, call } from "@redux-saga/core/effects";
import { getFavDataFromStore } from '../../../modules/saga/selectors';



function* workerFavData() {

    const favDataForShow = yield select(getFavDataFromStore)
    console.log('SAGA=======================================================',favDataForShow);
    //zacem to sagu sdelal kotoruyu ne yazayu
}


export function* watcherFavData() {
    yield takeEvery(constants.FAV_DATA_WATCHER , workerFavData)
}