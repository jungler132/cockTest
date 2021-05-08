import { spawn } from 'redux-saga/effects';
import { watcherLaunch } from '../../views/launchScreen/saga';

export default function* rootSaga() {
    yield spawn(watcherLaunch);
}
