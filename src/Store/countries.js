import {SET_COUNTRIES} from '../Utils/const';

const initialState = {
    //bikesByCountries: [],
    countryList:[],
    countryWiseCity:[]

};

export default function country(state = initialState, action){
    const {type, payload} = action;

    switch(type){

        case SET_COUNTRIES:
            const uniqueListOfCountries = payload.map((network)=> network.location.country).filter((country, index, accumulator) => accumulator.indexOf(country) === index);
            return {
                ...state,
                countryList: uniqueListOfCountries,
                countryWiseCity: payload.map((network)=>{
                    //const cities = payload.filter((network)=>(network.location.country === country))
                    return {
                        country: network.location.country,
                        city: network.location.city
                    }
                }).reduce((obj, item) => {
                    return {
                        ...obj,
                        [item.country]: [...obj[item.country]||[], item.city]
                    };
                }, {})
            }
        default:
            return state;
    }

}