import {FETCH_BIKES_BEGIN, FETCH_BIKES_FAILURE, FETCH_BIKES_SUCCESS} from '../Utils/const';

const initialState = {
    //bikesById: [],
    //bikeIds:[],
    bikeList:[],
    loading: false,
    error: null
};


export default function bikes(state = initialState, action){
    const {type, payload} = action;

    switch (type) {
        case FETCH_BIKES_SUCCESS:
            return{
                ...state,
                bikeList: payload,
                loading:false
            }
        case FETCH_BIKES_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_BIKES_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }

}