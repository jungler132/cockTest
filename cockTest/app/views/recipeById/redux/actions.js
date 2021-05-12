import { constants } from './constants';

export const setRecipeByIdScreen = data => ({
    type: constants.SET_RECIPE_ID,
    payload: data,
});
export const setRecipeIdData = data => ({
    type:constants.GET_RECIPEBYID_SCREEN_RECIPES,
    payload: data
})
