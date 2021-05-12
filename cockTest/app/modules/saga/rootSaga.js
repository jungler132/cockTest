import { spawn } from 'redux-saga/effects';
import { watcherHomeScreen } from '../../views/homeScreen/inspireScreen/saga';
import { watcherLaunch } from '../../views/launchScreen/saga';

export default function* rootSaga() {
    yield spawn(watcherLaunch);
    yield spawn(watcherHomeScreen);
}
