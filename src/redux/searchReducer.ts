import {hotelsAPI, searchAPI} from "../api/api";
import {AppStateType} from "./reduxStore";
import {ThunkAction} from "redux-thunk";

const ADD_KIDS = 'ADD_KIDS'
const SET_ADULT = 'SET_ADULT'
const SET_ROOMS = 'SET_ROOMS'
const SET_ARRIVAL_DATE = 'SET_ARRIVAL_DATE'
const SET_DEPARTURE_DATE = 'SET_DEPARTURE_DATE'
const COUNT_KIDS = 'COUNT_KIDS'
const SET_DATA = 'SET_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_READY = 'TOGGLE_IS_READY'

// export type DataType = {
//     day: number | null | undefined
//     month: number | null | undefined,
//     year: number | null | undefined
// }
export type roomType = {
    id: number
    name: string
}
export type messageType = {
    text: string
    type: string
}
export type KidsType = {
    id: number
    value: string
}

export type hotelsType = {
    name: string
    id: number
    mainPhoto: string
    stars: number
    minRoomPrice: number
    freeRooms: number
    roomTypes: Array<roomType>
    messageType: Array<messageType>

}
let initialState = {
    arrival_date: null as string | null,
    departure_date: null as string | null,
    adults: 0 as number,
    numberOfKids: [] as Array<number>,
    kids: [] as Array<string>,
    rooms: 0 as number,
    hotels: [] as Array<hotelsType>,
    isFetching: false as boolean,
    isReady: false as boolean
}
export type initialStateType = typeof initialState;


const searchReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                hotels: action.data,
            }
        case SET_ADULT:
            return {
                ...state,
                adults: action.adult
            }
        case COUNT_KIDS:
            return {
                ...state,
                numberOfKids: action.numberOfKids
            }
        case ADD_KIDS:

            return {
                ...state,
                kids: action.kids
            }
        case SET_ROOMS:
            return {
                ...state,
                rooms: action.rooms
            }
        case SET_ARRIVAL_DATE:
            return {
                ...state,
                arrival_date: action.date
            }
        case SET_DEPARTURE_DATE:
            return {
                ...state,
                departure_date: action.date
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_READY:
            return {
                ...state,
                isReady: action.isReady
            }
        default:
            return state;
    }

}

type ActionsTypes =
    CountKidsActionCreatorType
    | AddKidsActionCreatorType
    | AddAdultsActionCreatorType
    | AddDepartureDateActionCreatorType
    | AddArrivalDateActionCreatorType
    | AddRoomsActionCreatorType
    | SetDataType
    | ToggleIsFetchingType
    |ToggleIsReadyType

type CountKidsActionCreatorType = {
    type: typeof COUNT_KIDS,
    numberOfKids: Array<number>
}
export const countKidsActionCreator = (numberOfKids: Array<number>): CountKidsActionCreatorType => ({
    type: COUNT_KIDS,
    numberOfKids
})

type AddKidsActionCreatorType = {
    type: typeof ADD_KIDS,
    kids: object
}
export const addKidsActionCreator = (kids: Array<string>): AddKidsActionCreatorType => ({
    type: ADD_KIDS,
    kids
})

type AddAdultsActionCreatorType = {
    type: typeof SET_ADULT,
    adult: number
}
export const addAdultsActionCreator = (adult: number): AddAdultsActionCreatorType => ({
    type: SET_ADULT,
    adult
})
type AddDepartureDateActionCreatorType = {
    type: typeof SET_DEPARTURE_DATE,
    date: null | string
}
export const addDepartureDateActionCreator = (date: null | string): AddDepartureDateActionCreatorType => ({
    type: SET_DEPARTURE_DATE,
    date
})

type AddArrivalDateActionCreatorType = {
    type: typeof SET_ARRIVAL_DATE,
    date: null | string
}
export const addArrivalDateActionCreator = (date: null | string): AddArrivalDateActionCreatorType => ({
    type: SET_ARRIVAL_DATE,
    date
})
type AddRoomsActionCreatorType = {
    type: typeof SET_ROOMS,
    rooms: number
}
export const addRoomsActionCreator = (rooms: number): AddRoomsActionCreatorType => ({
    type: SET_ROOMS,
    rooms
})


type SetDataType = {
    type: typeof SET_DATA,
    data: Array<hotelsType>
}
export const setData = (data: Array<hotelsType>): SetDataType => {
    return {
        type: SET_DATA,
        data
    }
}
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
type ToggleIsReadyType = {
    type: typeof TOGGLE_IS_READY,
    isReady: boolean
}
export const toggleIsReady = (isReady: boolean): ToggleIsReadyType => {
    return {
        type: TOGGLE_IS_READY,
        isReady
    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getData = (arrival_date: string | null, departure_date: string | null, adults: number, kids: Array<string>): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await searchAPI.postData(arrival_date, departure_date, adults, kids)
        dispatch(toggleIsFetching(false))
        dispatch(setData(response.hotels))
        dispatch(toggleIsReady(false))
    }
}

export const getHotels = (): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await hotelsAPI.getHotels()
        dispatch(toggleIsFetching(false))
        dispatch(setData(response.hotels))
        dispatch(toggleIsReady(true))
    }
}

export default searchReducer;