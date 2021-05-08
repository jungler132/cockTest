import { constants } from "../redux/constant";


export const setLaunchEndTrue = (launchEnd) => ({
    type: constants.SET_TRUE,
    payload: launchEnd,
});
export const runWatcher = () => ({
    type: constants.SET_START,
    payload : false
});
