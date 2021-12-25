import React, {FC, useEffect, useState} from "react";
import '../../App.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar, DayValue, utils} from "react-modern-calendar-datepicker";
import {myCustomLocale} from "./calendarCastomize";

type PropsType = {
    addArrivalDate: (day: string | null ) => void
}

const ArrivalCalendar:FC<PropsType> = (props) => {
    const defaultValue = utils('en').getToday();
    const [day, setDay] = useState<DayValue>(defaultValue);
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