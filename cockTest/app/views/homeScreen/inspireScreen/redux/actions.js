import { constants } from './constants';

export const setAllRecipesForHomeScreen = data => ({
    type: constants.GET_HOME_SCREEN_RECIPES,
    payload: data,
});
