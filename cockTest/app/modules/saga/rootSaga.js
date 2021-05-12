import { spawn } from 'redux-saga/effects';
import { watcherHomeScreen } from '../../views/homeScreen/inspireScreen/saga';
import { watcherLaunch } from '../../views/launchScreen/saga';
import { watcherRecipeById } from '../../views/recipeById/saga';


export default function* rootSaga() {
    yield spawn(watcherLaunch);
    yield spawn(watcherHomeScreen);
    yield spawn(watcherRecipeById)
}
