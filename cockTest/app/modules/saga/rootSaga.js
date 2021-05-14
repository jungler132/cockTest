import { spawn } from 'redux-saga/effects';
import { watcherHomeScreen } from '../../views/homeScreen/inspireScreen/saga';
import { watcherLaunch } from '../../views/launchScreen/saga';
import { watcherMealByNameScreen } from '../../views/mealsBySearch/saga/index'
import { watcherRecipeById } from '../../views/recipeById/saga';
import { watcherRandomRecipe } from '../../views/searchScreen/newRecipeScreen/saga';


export default function* rootSaga() {
    yield spawn(watcherLaunch);
    yield spawn(watcherHomeScreen);
    yield spawn(watcherRecipeById);
    yield spawn(watcherRandomRecipe);
    yield spawn(watcherMealByNameScreen);
}
