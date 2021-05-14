import {constants} from './constants';

const initialState = {
    favData:{}
};

const reducerFavData = (state = initialState , action) => {

    switch(action.type) {
        case constants.SET_FAV_DATA:
        return{
            ...state,
            favData: action.payload,
        }
        default:
            return state;
    }
}
export default reducerFavData;