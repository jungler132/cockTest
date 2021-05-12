import { constants } from './constants'

const initialState = {
    recipe:{},
    recipeId: 0
};
export const reducerForRecipeById = (state = initialState , action) => {

    switch(action.type) {
        case constants.GET_RECIPEBYID_SCREEN_RECIPES:
            return {
                ...state,
                recipe: action.payload
            }
        case constants.SET_RECIPE_ID:{
            return {
                ...state,
                recipeId: action.payload
            }
        }
        default:
            return state;
    };
        
}