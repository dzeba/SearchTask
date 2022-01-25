import React, {useEffect, useState} from "react";
import '../../App.css';
import Hotel from "./Hotel";
import {getHotelsSelector, getIsFetching, getIsReady} from "../../Selectors/selectors";
import { useSelector} from "react-redux";


type PropsType = {

}

export let Hotels: React.FC<PropsType> = () => {
    let hotels = useSelector(getHotelsSelector)
    const [itemsToShow, setItemsToShow] = useState(4);
    const showmore = () => {
        setItemsToShow(hotels.length)
    }
    const showless = () => {
        setItemsToShow(4)
    }
    return <div>
        <div className='hotelsBlock_text-name'>Короткий список</div>
        <div className='hotelsBlock_text-description'>Вибрані пропозиції</div>
        {}
        <div className='hotels'>
            {hotels.slice(0, itemsToShow).map((hotel, index) => {if(hotel.roomTypes.length>0) return<Hotel hotel={hotel} key={index}/>})}
        </div>
        <div className='hotels_showButton-wrapper'>
            {(itemsToShow === 4 )
                ? <button className='hotels_showButton' onClick={showmore}>Показати</button>
                : <button className='hotels_showButton' onClick={showless}>Сховати</button>}
        </div>
    </div>
}



export let HotelsReady: React.FC<PropsType> = () => {
    let hotels = useSelector(getHotelsSelector)
    return <div>

        <div className='hotelsBlock_text-name'>Доступні пропозиції</div>
        <div className='hotelsBlock_text-description'>Вибрані пропозиції</div>
        {}
        <div className='hotels'>
            {hotels.map((hotel, index) => {if(hotel.roomTypes.length>0) return<Hotel hotel={hotel} key={index}/>})}
        </div>
    </div>
}
