import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addKidsActionCreator, countKidsActionCreator} from "../../redux/searchReducer";
import {getNumberOfKids} from "../../Selectors/selectors";

type PropsType = {
    kids: Array<string>
}


export let CountKids: FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const numberOfKids = useSelector(getNumberOfKids)
    const countKids = (numberOfKids: Array<number>) => {
        dispatch(countKidsActionCreator(numberOfKids))
    }
    const addKids = (kids: Array<string>) => {
        dispatch(addKidsActionCreator(kids))
    }
    const [listKids, setListKids] = useState<any>(numberOfKids)
    const [kids, setKids] = useState<any>(props.kids)

    useEffect(() => {
        countKids(listKids)
    }, [listKids])
    useEffect(() => {
        addKids(kids)
    }, [kids])

    let decrementKids = () => {

        setListKids((actual: any) => {
            const newArr = [
                ...listKids.slice(0, -1)
            ]
            return newArr
        })
        setKids((actual: any) => {
            const newKids = [
                ...props.kids.slice(0, -1)
            ]
            return newKids
        })

    }
    let incrementKids = () => {
        setListKids([...listKids, listKids.push()])
    }


    if (listKids.length === 0) {
        return <div className='settings_block'><span className='settings_block-text'>Дітей</span>
            <button disabled onClick={decrementKids} className='settings_block-button'>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.499969" width="27" height="27" rx="13.5" stroke="#B3BAC5"/>
                    <path
                        d="M14.6667 13.6666H19.3333C19.5174 13.6666 19.6667 13.8159 19.6667 14C19.6667 14.1841 19.5174 14.3333 19.3333 14.3333H14.6667H13.3333H8.66667C8.48257 14.3333 8.33333 14.1841 8.33333 14C8.33333 13.8159 8.48257 13.6666 8.66667 13.6666H13.3333H14.6667Z"
                        fill="#C5C6CF" stroke="#B3BAC5" strokeWidth="0.666667"/>
                </svg>
            </button>
            <span className='settings_block-number'>{listKids.length}</span>
            <button className='settings_block-button' onClick={incrementKids}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.499969" width="27" height="27" rx="13.5" stroke="#B3BAC5"/>
                    <path
                        d="M14.6667 13.3333H19.3333C19.7015 13.3333 20 13.6318 20 14C20 14.3682 19.7015 14.6666 19.3333 14.6666H14.6667V19.3333C14.6667 19.7015 14.3682 20 14 20C13.6318 20 13.3333 19.7015 13.3333 19.3333V14.6666H8.66667C8.29848 14.6666 8 14.3682 8 14C8 13.6318 8.29848 13.3333 8.66667 13.3333H13.3333V8.66664C13.3333 8.29845 13.6318 7.99997 14 7.99997C14.3682 7.99997 14.6667 8.29845 14.6667 8.66664V13.3333Z"
                        fill="#B3BAC5"/>
                </svg>
            </button>
        </div>;
    }
    return <div className='settings_block'><span className='settings_block-text'>Дітей</span>
        <button onClick={decrementKids} className='settings_block-button'>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.499969" width="27" height="27" rx="13.5" stroke="#B3BAC5"/>
                <path
                    d="M14.6667 13.6666H19.3333C19.5174 13.6666 19.6667 13.8159 19.6667 14C19.6667 14.1841 19.5174 14.3333 19.3333 14.3333H14.6667H13.3333H8.66667C8.48257 14.3333 8.33333 14.1841 8.33333 14C8.33333 13.8159 8.48257 13.6666 8.66667 13.6666H13.3333H14.6667Z"
                    fill="#C5C6CF" stroke="#B3BAC5" strokeWidth="0.666667"/>
            </svg>
        </button>
        <span className='settings_block-number'>{listKids.length}</span>
        <button className='settings_block-button' onClick={incrementKids}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.499969" width="27" height="27" rx="13.5" stroke="#B3BAC5"/>
                <path
                    d="M14.6667 13.3333H19.3333C19.7015 13.3333 20 13.6318 20 14C20 14.3682 19.7015 14.6666 19.3333 14.6666H14.6667V19.3333C14.6667 19.7015 14.3682 20 14 20C13.6318 20 13.3333 19.7015 13.3333 19.3333V14.6666H8.66667C8.29848 14.6666 8 14.3682 8 14C8 13.6318 8.29848 13.3333 8.66667 13.3333H13.3333V8.66664C13.3333 8.29845 13.6318 7.99997 14 7.99997C14.3682 7.99997 14.6667 8.29845 14.6667 8.66664V13.3333Z"
                    fill="#B3BAC5"/>
            </svg>
        </button>
    </div>;
}
