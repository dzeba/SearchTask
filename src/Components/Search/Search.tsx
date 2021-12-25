import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import '../../App.css';
import NumbersOfPeople from "./NumbersOfPeople";
import ArrivalCalendar from "./ArrivalCalendar";
import {useDispatch, useSelector} from "react-redux";
import {
    get_arrival_date,
    get_departure_date,
    getAdults, getHotelsSelector,
    getIsFetching,
    getKids, getNumberOfKids,
    getRooms
} from "../../Selectors/selectors";
import {
    addAdultsActionCreator,
    addArrivalDateActionCreator,
    addDepartureDateActionCreator,
    addKidsActionCreator,
    addRoomsActionCreator,
    countKidsActionCreator,
    getData, getHotels, KidsType,
} from "../../redux/searchReducer";
import DepartureCalendar from "./DepartureCalender";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";


type PropsType = {}
const Search: FC<PropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    const arrival_date = useSelector(get_arrival_date)
    const departure_date = useSelector(get_departure_date)
    const adults = useSelector(getAdults)
    const kids = useSelector(getKids)
    const rooms = useSelector(getRooms)
    const numberOfKids = useSelector(getNumberOfKids)
    const dispatch = useDispatch()
    const addArrivalDate = (day: string | null) => {
        dispatch(addArrivalDateActionCreator(day))
    }
    const addDepartureDate = (day: string | null) => {
        dispatch(addDepartureDateActionCreator(day))
    }
    const getDataWrapper = (arrival_date: string | null, departure_date: string | null, adults: number, kids: Array<string>) => {
        dispatch(getData(arrival_date, departure_date, adults, kids))
    }
    const addKids = (kids: Array<string>) => {
        dispatch(addKidsActionCreator(kids))
    }
    const addAdults = (adult: number) => {
        dispatch(addAdultsActionCreator(adult))
    }
    const countKids = (numberOfKids: Array<number>) => {
        dispatch(countKidsActionCreator(numberOfKids))
    }
    const getHotelsWrapper = () =>{
        dispatch(getHotels())
    }
    const addRooms = (rooms: number) => {
        dispatch(addRoomsActionCreator(rooms))
    }
    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [isOpenDeparture, setIsOpenDeparture] = useState(false)
    const [isOpenArrival, setIsOpenArrival] = useState(false)

    let wrapperSettingsRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    let wrapperArrivalDateRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    let wrapperDepartureDateRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const navigate = useNavigate();
    const location = useLocation();
    const queryString = require('query-string');

    useEffect(() => {
        const parsed = queryString.parse(location.search, {arrayFormat: 'bracket'}) as unknown as { arrival_date: string, departure_date: string, adults: number, kids: Array<string> }
        console.log(parsed)
        let actualArrival_date = arrival_date;
        let actualDeparture_date = departure_date;
        let actualAdults = adults;
        let actualKids = kids;
        if (parsed.departure_date) actualDeparture_date = parsed.departure_date === 'null' ? null : parsed.departure_date
        if (parsed.arrival_date) actualArrival_date = parsed.arrival_date === 'null' ? null : parsed.arrival_date
        if (parsed.adults) actualAdults = parsed.adults
        if (parsed.kids) actualKids = parsed.kids
        addArrivalDate(actualArrival_date)
        addDepartureDate(actualDeparture_date)
        let arr = Object.keys(actualKids).map((key) => {
            return Number(key)
        });
        countKids(arr)
        addKids(actualKids)
        addAdults(actualAdults)
        if(actualDeparture_date === null || actualArrival_date === null || actualAdults ===0){
            getHotelsWrapper()
        }
        else {
            getDataWrapper(actualArrival_date, actualDeparture_date, actualAdults, actualKids)
        }
    }, [])


    useEffect(() => {

        let arr = Object.keys(kids).map((key) => {
            // @ts-ignore
            return `&kids[]=${kids[key]}`
        });
        let arr1 = arr.join('')
        navigate({
            pathname: "/SearchTask",
            search: `?arrival_date=${arrival_date}&departure_date=${departure_date}&adults=${adults}${arr1}`
        });
    }, [arrival_date, departure_date, adults,numberOfKids, kids])

    let openSettingsMenu = (event: any) => {
        setIsOpenSettings(true)
        document.addEventListener('mousedown', closeSettingsMenu);
    }
    let closeSettingsMenu = (event: any) => {
        if (wrapperSettingsRef.current && !wrapperSettingsRef.current.contains(event.target)) {
            setIsOpenSettings(false)
            document.removeEventListener('mousedown', closeSettingsMenu);
        }
    }
    let openDepartureCalendar = (event: any) => {
        setIsOpenDeparture(true)
        document.addEventListener('mousedown', closeDepartureCalendar);

    }
    let closeDepartureCalendar = (event: any) => {
        if (wrapperSettingsRef.current && !wrapperDepartureDateRef.current.contains(event.target)) {
            setIsOpenDeparture(false)
            document.removeEventListener('mousedown', closeDepartureCalendar);
        }
    }
    let openArrivalCalendar = (event: any) => {
        setIsOpenArrival(true)
        document.addEventListener('mousedown', closeArrivalCalendar);

    }
    let closeArrivalCalendar = (event: any) => {
        if (wrapperSettingsRef.current && !wrapperArrivalDateRef.current.contains(event.target)) {
            setIsOpenArrival(false)
            document.removeEventListener('mousedown', closeArrivalCalendar);
        }
    }
    let SendRequest = () => {
        getDataWrapper(arrival_date, departure_date, adults, kids);
    }

    return <div className='search'>
        <div className='search_wrapper'>
            <div className='settingsBlock' ref={wrapperArrivalDateRef}>
                <div className='search_label'>
                    <label onClick={openArrivalCalendar}>
                        <div className='search_label-text1'>Заїзд з 15:00</div>
                        <div className='search_label-text2'>{arrival_date === null
                            ? 'Оберіть дату заїзда'
                            : arrival_date}</div>
                    </label>
                </div>
                {isOpenArrival &&
                <ArrivalCalendar addArrivalDate={addArrivalDate}/>
                }
            </div>
            <div className='settingsBlock' ref={wrapperDepartureDateRef}>
                <div className='search_label'>
                    <label onClick={openDepartureCalendar}>
                        <div className='search_label-text1'>Виїзд до 12:00</div>
                        <div className='search_label-text2'>{departure_date === null
                            ? 'Оберіть дату виїзда'
                            : departure_date}</div>
                    </label>
                </div>
                {isOpenDeparture &&
                <DepartureCalendar addDepartureDate={addDepartureDate}/>
                }
            </div>
            <div className='settingsBlock' ref={wrapperSettingsRef} onClick={openSettingsMenu}>
                <div className='search_label'>
                    <label>
                        <div className='search_label-text1'>Гості</div>
                        <div
                            className='search_label-text2'>{rooms !== 0 ? rooms : 'Оберіть кількість гостей'}</div>
                    </label>
                </div>
                {isOpenSettings &&
                <div>
                    <NumbersOfPeople/>
                </div>}
            </div>
            <button className='searchSubmit' onClick={SendRequest}>
                <div className='searchSubmit_text'>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.6505 17C14.2103 17 17.9067 13.4183 17.9067 9C17.9067 4.58172 14.2103 1 9.6505 1C5.09072 1 1.39429 4.58172 1.39429 9C1.39429 13.4183 5.09072 17 9.6505 17Z"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.9704 19.0004L15.4811 14.6504" stroke="white" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className='searchSubmit_text-span'>Пошук готелів</span></div>
            </button>
        </div>
    </div>
}
export default Search
