import {constants} from './constants';

export const setMealName = data => ({
    type:constants.SET_MEAL_NAME,
    payload:data,
})

export const setMealDataForShow = data => ({
    type:constants.SET_MEAL_DATA_FOR_SHOW,
    payload:data
})