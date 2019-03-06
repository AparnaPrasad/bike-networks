import {
    FETCH_BIKES_BEGIN, FETCH_BIKES_FAILURE, FETCH_BIKES_SUCCESS,
} from '../Utils/const';
import { setBikesByCities } from './cities';
import { setBikesByCountries } from './countries';
import { sample } from '../Utils/sample_response';
import Api from '../Utils/api';

export const fetchBikesBegin = () => ({
    type: FETCH_BIKES_BEGIN,
});

export const fetchBikesSuccess = products => ({
    type: FETCH_BIKES_SUCCESS,
    payload: products,
});

export const fetchBikesFailure = error => ({
    type: FETCH_BIKES_FAILURE,
    payload: error,
});

export function fetchBikesNetwork() {
    return (dispatch) => {
        dispatch(fetchBikesBegin());
        Api.get('/v2/networks').then((response) => {
            if (response && response.data && response.data.networks) {
                dispatch(fetchBikesSuccess(response.data.networks));
                dispatch(setBikesByCities(response.data.networks));
                dispatch(setBikesByCountries(response.data.networks));
            } else {
                dispatch(fetchBikesFailure('Unformatted data received'));
            }
        }).catch((error) => {
            dispatch(fetchBikesFailure(error));
        });
    };

    /* return (dispatch) => {
        dispatch(fetchBikesBegin());
        setTimeout(() => {
            dispatch(fetchBikesSuccess(sample.data.networks));
            dispatch(setBikesByCities(sample.data.networks));
            dispatch(setBikesByCountries(sample.data.networks));
        }, 10000);

    } */
}