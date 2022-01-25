import React, {FC, useEffect, useState} from "react";
import '../../App.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar, DayValue, utils} from "react-modern-calendar-datepicker";
import {myCustomLocale} from "./calendarCastomize";
import {useSelector} from "react-redux";
import {get_arrival_date} from "../../Selectors/selectors";

type PropsType = {
    addArrivalDate: (day: string | null ) => void
}

const ArrivalCalendar:FC<PropsType> = (props) => {
    const queryString = require('querystring');
    const arrival_date = useSelector(get_arrival_date)
    let currentDate = queryString.parse(arrival_date,'-', );
    let arr = Object.keys(currentDate)
    let data = {
        year: Number(arr[2]) as unknown as number,
        month: Number(arr[0]) as unknown as number,
        day: Number(arr[1]) as unknown as number
    }
    const [day, setDay] = useState<DayValue>(data);
    const convert = `${day!.year}-${day!.month}-${day!.day}`
    useEffect(()=>{
        props.addArrivalDate(convert)
    },[day])


    return (
        <Calendar
            value={day} onChange={setDay}
            colorPrimary="#00B1B2"
            locale={myCustomLocale}
            calendarClassName="calendar"
            calendarTodayClassName="calendar_today"
        />
    );

}

export default ArrivalCalendar;