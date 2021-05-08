import { SET_TRUE } from '../saga/actions';
export const initialState = {
    launchEnd: true,
};
function reducerLaunch(state = initialState, action) {
    switch (action.type) {
    case SET_TRUE :
        return {
            launchEnd: false,
        };
    default :
        return state;
    }
}
export default reducerLaunch;