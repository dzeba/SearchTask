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
const SEND_REQUEST = 'SEND_REQUEST'
const MESSAGE_ERROR = 'MESSAGE_ERROR'

let date = new Date();
let day = date.getDate();
let month = date.getMonth();

// export type DataType = {
//     year: number | null | undefined
//     month: number | null | undefined,
//     day: number | null | undefined
// }
export type roomType = {
    id: number
    name: string
}
export type messageType = {
    text: string
    type: string
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
    arrival_date: `2022-${month + 1}-${day}` as string | null,
    departure_date: `2022-${month + 1}-${day + 1}` as string | null,
    adults: 2 as number,
    numberOfKids: [] as Array<number>,
    kids: [] as Array<string>,
    rooms: 0 as number,
    hotels: [] as Array<hotelsType>,
    isFetching: false as boolean,
    isReady: false as boolean,
    sendRequest: 0 as number,
    messageError: {
        adults: [] as Array<string>,
        departure_date: [] as Array<string>,
        arrival_date: [] as Array<string>
    }

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

        case SEND_REQUEST:
            return {
                ...state,
                sendRequest: state.sendRequest + 1
            }
        case MESSAGE_ERROR:
            return {
                ...state,
                messageError: action.messageError
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
    | ToggleIsReadyType
    | SendRequestType
    | MessageErrorType

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
type MessageErrorType = {
    type: typeof MESSAGE_ERROR,
    messageError: string
}
export const MessageErrorAC = (messageError: string): MessageErrorType => {
    return {
        type: MESSAGE_ERROR,
        messageError
    }
}
type SendRequestType = {
    type: typeof SEND_REQUEST,
}
export const sendRequestAC = (): SendRequestType => {
    return {
        type: SEND_REQUEST,
    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getData = (arrival_date: string | null, departure_date: string | null, adults: number, kids: Array<string>): (dispatch: any) => void => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        searchAPI.postData(arrival_date, departure_date, adults, kids).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setData(response.data.data.hotels))
            dispatch(sendRequestAC())
            dispatch(toggleIsReady(false))
            dispatch(MessageErrorAC(''))
        }).catch(e => {
            dispatch(MessageErrorAC(e.response.data.errors))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const getHotels = (): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await hotelsAPI.getHotels()
        dispatch(toggleIsFetching(false))
        dispatch(setData(response.data.data.hotels))
        dispatch(toggleIsReady(true))
    }
}

export default searchReducer;