import { combineReducers } from 'redux'
import reducerLaunch from "../../../views/launchScreen/redux/reducer";
import {reducerForInspire} from '../../../views/homeScreen/inspireScreen/redux/reducer'

export const rootReducer = combineReducers({
    reducerLaunch,
    reducerForInspire,
});
