export const myCustomLocale = {
    // months list by order
    months: [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень',
    ],

    // week days by order
    weekDays: [
        {
            name: 'Sunday', // used for accessibility
            short: 'ПН', // displayed at the top of days' rows
            isWeekend: true, // is it a formal weekend or not?
        },
        {
            name: 'Monday',
            short: 'ВТ',
        },
        {
            name: 'Tuesday',
            short: 'СР',
        },
        {
            name: 'Wednesday',
            short: 'ЧТ',
        },
        {
            name: 'Thursday',
            short: 'ПТ',
        },
        {
            name: 'Friday',
            short: 'СБ',
        },
        {
            name: 'Saturday',
            short: 'НД',
            isWeekend: true,
        },
    ],

    // just play around with this number between 0 and 6
    weekStartingIndex: 0,

    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject:any) {
        return gregorainTodayObject;
    },

    // return a native JavaScript date here
    toNativeDate(date:any) {
        return new Date(date.year, date.month - 1, date.day);
    },

    // return a number for date's month length
    getMonthLength(date:any) {
        return new Date(date.year, date.month, 0).getDate();
    },

    // return a transformed digit to your locale
    transformDigit(digit:any) {
        return digit;
    },

    // texts in the date picker
    nextMonth: 'Next Month',
    previousMonth: 'Previous Month',
    openMonthSelector: 'Open Month Selector',
    openYearSelector: 'Open Year Selector',
    closeMonthSelector: 'Close Month Selector',
    closeYearSelector: 'Close Year Selector',
    defaultPlaceholder: 'Виберіть дату',

    // for input range value
    from: 'from',
    to: 'to',


    // used for input value when multi dates are selected
    digitSeparator: ',',

    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,

    // is your language rtl or ltr?
    isRtl: false,
}
