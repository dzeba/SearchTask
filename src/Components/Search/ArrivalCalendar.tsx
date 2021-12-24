import React, {FC, useEffect, useState} from "react";
import '../../App.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar, DayValue, utils} from "react-modern-calendar-datepicker";
import {myCustomLocale} from "./calendarCastomize";

type PropsType = {
    addArrivalDate: (day: number | null | undefined, month: number | null | undefined, year: number | null | undefined) => void
}

const MainCalendar:FC<PropsType> = (props) => {
    const defaultValue = utils('en').getToday();
    const [day, setDay] = useState<DayValue>(defaultValue);
    useEffect(()=>{
        props.addArrivalDate(day!.day, day!.month, day!.year)
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

export default MainCalendar;