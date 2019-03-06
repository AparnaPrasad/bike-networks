import {SET_CITIES} from '../Utils/const';

const initialState = {
    //bikesByCities: [],
    cityList:[]

};

export default function city(state = initialState, action){
    const {type, payload} = action;
    switch(type){

        case SET_CITIES:
            return {
                ...state,
                /*bikesByCities: payload.map((network)=>({
                   city: network.location.city,
                   id: network.id
                })).reduce((obj, item) => {
                    return {
                        ...obj,
                        [item.city]: [...obj[item.city]||[],item.id]
                    };
                }, {}),*/
                cityList: payload.map((network)=> network.location.city).filter((city, index, accumulator) => accumulator.indexOf(city) === index)
            }
        default:
            return state;
    }

}