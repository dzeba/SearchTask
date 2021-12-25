import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getKids, getNumberOfKids} from "../../Selectors/selectors";
import {
    addKidsActionCreator,
} from "../../redux/searchReducer";
import {CountAdults} from "./CountAdults";
import {CountKids} from "./CountKids";
import {CountRooms} from "./CountRooms";

type PropsType = {

}

const NumbersOfPeople: FC<PropsType> = (props) => {
    const numberOfKids = useSelector(getNumberOfKids)
    const kidsProps = useSelector(getKids)
    const dispatch = useDispatch()
    const addKids = (kids: Array<string>) => {
        dispatch(addKidsActionCreator(kids))
    }
    const [kids, setKids] = useState<any>(kidsProps)

    useEffect(() => {
        addKids(kids)
    }, [kids])

    let handleChange = (el: any) =>(event:any)=> {
        setKids((actual:any)=>{
            let arr = {...kids, [el]:event.target.value}
            return Object.values(arr);
        })
        event.preventDefault()
    }


    return <div className='messageSettings'>
        <CountAdults/>
        <CountKids kids={kidsProps}/>
        <CountRooms/>
        <div className='settings_childrenAge'>
            {numberOfKids.map((el:any) => <div className='settings_childrenAge-child'>
                <div className='settings_block-text'>Дитина {el + 1}</div>
                <form>
                    <select
                        onChange={handleChange(el)}
                        value={kids[el]}
                        name={kids[el]}
                        className='stylized-select'
                    >
                        <option value="1">1 рік</option>
                        <option value="2">2 роки</option>
                        <option value="3">3 роки</option>
                        <option value="4">4 роки</option>
                        <option value="5">5 років</option>
                        <option value="6">6 років</option>
                        <option value="7">7 років</option>
                        <option value="8">8 років</option>
                        <option value="9">9 років</option>
                        <option value="10">10 років</option>
                        <option value="11">11 років</option>
                        <option value='12'>12 років</option>
                    </select>
                </form>
            </div>)}
        </div>
    </div>
}
export default NumbersOfPeople;

