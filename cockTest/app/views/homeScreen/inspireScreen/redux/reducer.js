import { constants } from './constants'

const initialState = {
    count: 0, 
    recipes:{}
};

export const reducerForInspire = (state = initialState , action) => {

    switch(action.type) {
        case constants.GET_HOME_SCREEN_RECIPES:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    };
        
}