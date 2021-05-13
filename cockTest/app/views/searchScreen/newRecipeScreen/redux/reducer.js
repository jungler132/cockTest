import { constants } from './constants'

const initialState = {
    count: 0,
    recipes:{}
};

export const reducerForRandomRecipes = (state = initialState , action) => {

    switch(action.type) {
        case constants.GET_RANDOM_RECIPES:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    };
        
}