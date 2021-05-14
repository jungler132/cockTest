import {constants} from './constants';
const initialState = {
    mealName: '',
    mealDataForShow: {},
};

function reducerMealByName(state = initialState, action) {
    switch(action.type) {
    case constants.SET_MEAL_DATA_FOR_SHOW:
        return{
            ...state,
            mealDataForShow: action.payload,
        };
    case constants.SET_MEAL_NAME:
        return{
            ...state,
            mealName: action.payload,
        };
    default:
        return state;
    }
}

export default reducerMealByName;