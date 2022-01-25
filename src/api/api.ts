import axios from "axios";

const queryString = require('query-string');

export const searchAPI = {
    postData(arrival_date: string | undefined | null, departure_date: string | null, adults: number, kids: Array<string> ) {
        let query: any = {}
        if(departure_date !== null) query.departure_date = departure_date
        if(arrival_date !== null) query.arrival_date = arrival_date
        if(adults !== 0) query.adults = adults
        if(kids) query.kids = kids
        let myUrl = `https://api.dev24.bukovel.net/b24/desktop/hotels?${queryString.stringify(query,{arrayFormat: 'bracket'})}`
        return axios.get(myUrl)
    }
}
export const hotelsAPI = {
    getHotels(){
        return axios.get(`https://api.dev24.bukovel.net/b24/desktop/hotels`).then(res=>res)

    }
}

