import React, {FC, useEffect, useState} from "react";
import '../../App.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar, DayValue, utils} from "react-modern-calendar-datepicker";
import {myCustomLocale} from "./calendarCastomize";
import {useSelector} from "react-redux";
import { get_departure_date} from "../../Selectors/selectors";

type PropsType = {
    addDepartureDate: (day: string | null) => void
}

const DepartureCalendar:FC<PropsType> = (props) => {
    const queryString = require('querystring');
    const departure_date = useSelector(get_departure_date)
    let currentDate = queryString.parse(departure_date,'-', );
    let arr = Object.keys(currentDate)
    let data = {
        year: Number(arr[2]) as unknown as number,
        month: Number(arr[0]) as unknown as number,
        day: Number(arr[1]) as unknown as number
    }
    const [day, setDay] = useState<DayValue>(data);
    const convert = `${day!.year}-${day!.month}-${day!.day}`
    useEffect(()=>{
        props.addDepartureDate(convert)
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

export default DepartureCalendar;