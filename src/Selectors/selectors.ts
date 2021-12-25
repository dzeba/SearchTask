import {AppStateType} from "../redux/reduxStore";

export const get_arrival_date = (state: AppStateType) =>{
    return state.searchPage.arrival_date
}
export const get_departure_date = (state: AppStateType) =>{
    return state.searchPage.departure_date
}
export const getAdults = (state: AppStateType) =>{
    return state.searchPage.adults
}
export const getKids = (state: AppStateType) =>{
    return state.searchPage.kids
}
export const getRooms = (state: AppStateType) =>{
    return state.searchPage.rooms
}
export const getNumberOfKids = (state: AppStateType) =>{
    return state.searchPage.numberOfKids
}
export const getHotelsSelector = (state: AppStateType) =>{
    return state.searchPage.hotels
}
export const getIsFetching = (state: AppStateType) =>{
    return state.searchPage.isFetching
}
export const getIsReady = (state: AppStateType) =>{
    return state.searchPage.isReady
}