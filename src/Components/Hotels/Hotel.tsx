import React, {PropsWithChildren} from "react";
import '../../App.css';
import {hotelsType} from "../../redux/searchReducer";

type PropsType = {
    hotel: hotelsType
}

let Hotel = ({hotel}: React.PropsWithChildren<PropsType>) => {


return <div>
    <div className='hotelsBlock'>
        <div>
            <img className='hotelsBlock_image' src={hotel.mainPhoto} alt='3'/>
        </div>
        <div className='hotelsBlock_text-name'>
            {hotel.name}
        </div>
        <div className='hotelsBlock_text-description'>

            {hotel.roomTypes.slice(0, 2).map((el,index) => {
                 return <div key={index}> {el.name}</div>
            })}
        </div>
        <div className='hotelsBlock_price-block'>
            <div className='hotelsBlock_text-price'>
                Від {hotel.minRoomPrice}
            </div>
            <div className='hotelsBlock_text-stars'>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.5 12.859L13.753 16L12.359 10.08L17 6.1L10.889 5.586L8.5 0L6.112 5.583L0 6.1L4.641 10.08L3.247 16L8.5 12.859Z"
                        fill="#E01F3D"/>
                </svg>
                {hotel.stars}
            </div>
        </div>
    </div>
</div>

}

export default Hotel;