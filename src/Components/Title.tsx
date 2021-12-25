import React from "react";
import '../App.css';

const Title = (props: any) => {
    return <div className='title'>
        <div className='title_links'>
            <a href='' className='title_link'>Головна</a>
            <span className='title_dash'>/</span>
            <a href='' className='title_link'>Sky-паси</a>
        </div>
        <h1 className='title_titleText'>Готелі в ТК «Буковель</h1>
    </div>

}
export  default  Title;