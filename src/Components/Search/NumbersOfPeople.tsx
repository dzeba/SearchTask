import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getKids, getNumberOfKids} from "../../Selectors/selectors";
import {
    addKidsActionCreator,
} from "../../redux/searchReducer";
import {CountAdults} from "./CountAdults";
import {CountKids} from "./CountKids";
import {CountRooms} from "./CountRooms";
import {ErrorMessage, useFormik} from "formik";

type PropsType = {

}

const validate = (values:any) => {
    const errors:any = {};
     if (values.age === '0') {
        errors.age = 'Виберіть вік';
    }

    return errors;
};

const NumbersOfPeople: FC<PropsType> = (props) => {
    const formik = useFormik({
        initialValues: {
            age: '',
        },
        validate,
        onSubmit: values => {
            values.age = kids
        },
    })

    const numberOfKids = useSelector(getNumberOfKids)
    const kidsProps = useSelector(getKids)
    const dispatch = useDispatch()
    const addKids = (kids: Array<string>) => {
        dispatch(addKidsActionCreator(kids))
    }
    const [kids, setKids] = useState<any>(kidsProps)

    useEffect(() => {
        addKids(Object.values(kids))
    }, [kids])

    let handleChange = (el: any) =>(event:any)=> {
        setKids((actual:any)=>{
            let arr = {
                ...kids,
                [el]: event.target.value
            }
            let kidsArr = Object.values(arr);
            return arr;
        })
        event.preventDefault()
    }

    return <div className='messageSettings'>
        <CountAdults/>
        <CountKids kids={kidsProps}/>
        <CountRooms/>
        <div className='settings_childrenAge'>
            {numberOfKids.map((el:any, index) => <div key={index} className='settings_childrenAge-child'>
                <div className='settings_block-text'>Дитина {el + 1}</div>
                <form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                    <select
                        onChange={handleChange(el)}
                        value={kids[el]}
                        name='age'
                        id='age'
                        className='stylized-select'
                    >
                        <option value="0">Не вказано</option>
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
                    {formik.errors.age && kids[el] === '0'  ? <div className='errorMessage'>{formik.errors.age}</div> : null}
                </form>
            </div>)}

        </div>
    </div>
}
export default NumbersOfPeople;

