import { constants } from './constant'
export const initialState = {
    launchEnd: true,
};
function reducerLaunch(state = initialState, action) {
    
    switch (action.type) {
    case constants.SET_TRUE :
        return {
            launchEnd: false,
        };
    default :
        return state;
    }
}
export default reducerLaunch;

