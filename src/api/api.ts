import axios from "axios";
import {KidsType} from "../redux/searchReducer";


export const searchAPI = {
    postData(arrival_date: string | undefined | null, departure_date: string | null, adults: number, kids: Array<string> ) {
        let arr = Object.keys(kids).map((key) => {
            // @ts-ignore
            return `&kids[]=${kids[key]}`
        });
        let arr1 = arr.join('')
        let myUrl = `https://api.dev24.bukovel.net/b24/desktop/hotels?arrival_date=${arrival_date}&departure_date=${departure_date}&adults=${adults}${arr1}`

        return axios.get(myUrl).then(res=>res.data.data)

    }
}
export const hotelsAPI = {
    getHotels(){
        return axios.get(`https://api.dev24.bukovel.net/b24/desktop/hotels`).then(res=>res.data.data)

    }
}

