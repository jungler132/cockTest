import { combineReducers } from 'redux'
import reducerLaunch from "../../../views/launchScreen/redux/reducer";
import {reducerForInspire} from '../../../views/homeScreen/inspireScreen/redux/reducer'
import {reducerForRecipeById} from '../../../views/recipeById/redux/reducer'
import { reducerForRandomRecipes } from '../../../views/searchScreen/newRecipeScreen/redux/reducer'

export const rootReducer = combineReducers({
    reducerLaunch,
    reducerForInspire,
    reducerForRecipeById,
    reducerForRandomRecipes
});
