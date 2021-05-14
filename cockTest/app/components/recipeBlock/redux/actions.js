import { constants } from './constants'

export const setFavData = data => ({
    type:constants.SET_FAV_DATA,
    payload:data,
})