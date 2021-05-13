import { constants } from './constants';

export const setMealNameFromSearchScreen = data => ({
    type: constants.GET_RANDOM_RECIPES,
    payload: data,
});
