import React, {useEffect, useState} from "react";

type PropsType = {
    adults: number
    addAdultsActionCreator: (adult: number) => void
}


let People: React.FC<PropsType> = ({adults, addAdultsActionCreator
                                   }) => {
    const [adultsLocal, setAdultsLocal] = useState(adults);

    useEffect(() => {
        addAdultsActionCreator(adultsLocal)
    }, [adultsLocal]);



    let decrementAdults = () => {
        setAdultsLocal(adultsLocal - 1)

    }
    let incrementAdults = () => {
        setAdultsLocal(adultsLocal + 1)
    }

let CountAdults = () => {
    if (adultsLocal === 0) {
        return <div className='settings_block'><span className='settings_block-text'>Дорослих</span>
            <button disabled onClick={decrementAdults} className='settings_block-button'>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.499969" width="27" height="27" rx="13.5" stroke="#B3BAC5"/>
                    <path
                        d="M14.6667 13.6666H19.3333C19.5174 13.6666 19.6667 13.8159 19.6667 14C19.6667 14.1841 19.5174 14.3333 19.3333 14.3333H14.6667H13.3333H8.66667C8.48257 14.3333 8.33333 14.1841 8.33333 14C8.33333 13.8159 8.48257 13.6666 8.66667 13.6666H13.3333H14.6667Z"
                        fill="#C5C6CF" stroke="#B3BAC5" stroke-width="0.666667"/>
                </svg>
            </button>
            <span className='settings_block-number'>{adultsLocal}</span>
            <button className='settings_block-button' onClick={incrementAdults}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.499969" width="27" height="27" rx="13.5" stroke="#B3BAC5"/>
                    <path
                        d="M14.6667 13.3333H19.3333C19.7015 13.3333 20 13.6318 20 14C20 14.3682 19.7015 14.6666 19.3333 14.6666H14.6667V19.3333C14.6667 19.7015 14.3682 20 14 20C13.6318 20 13.3333 19.7015 13.3333 19.3333V14.6666H8.66667C8.29848 14.6666 8 14.3682 8 14C8 13.6318 8.29848 13.3333 8.66667 13.3333H13.3333V8.66664C13.3333 8.29845 13.6318 7.99997 14 7.99997C14.3682 7.99997 14.6667 8.29845 14.6667 8.66664V13.3333Z"
                        fill="#B3BAC5"/>
                </svg>
            </button>
        </div>;
    }
    return <div className='settings_block'><span className='settings_block-text'>Дорослих</span>
        <button className='settings_block-button' onClick={decrementAdults}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.499969" width="27" height="27" rx="13.5" stroke="#B3BAC5"/>
                <path
                    d="M14.6667 13.6666H19.3333C19.5174 13.6666 19.6667 13.8159 19.6667 14C19.6667 14.1841 19.5174 14.3333 19.3333 14.3333H14.6667H13.3333H8.66667C8.48257 14.3333 8.33333 14.1841 8.33333 14C8.33333 13.8159 8.48257 13.6666 8.66667 13.6666H13.3333H14.6667Z"
                    fill="#C5C6CF" stroke="#B3BAC5" strokeWidth="0.666667"/>
            </svg>
        </button>
        <span className='settings_block-number'>{adultsLocal}</span>
        <button className='settings_block-button' onClick={incrementAdults}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.499969" width="27" height="27" rx="13.5" stroke="#B3BAC5"/>
                <path
                    d="M14.6667 13.3333H19.3333C19.7015 13.3333 20 13.6318 20 14C20 14.3682 19.7015 14.6666 19.3333 14.6666H14.6667V19.3333C14.6667 19.7015 14.3682 20 14 20C13.6318 20 13.3333 19.7015 13.3333 19.3333V14.6666H8.66667C8.29848 14.6666 8 14.3682 8 14C8 13.6318 8.29848 13.3333 8.66667 13.3333H13.3333V8.66664C13.3333 8.29845 13.6318 7.99997 14 7.99997C14.3682 7.99997 14.6667 8.29845 14.6667 8.66664V13.3333Z"
                    fill="#B3BAC5"/>
            </svg>
        </button>
    </div>;
}



return <div className='messageSettings'>
    <CountAdults/>
</div>

}

export default People;