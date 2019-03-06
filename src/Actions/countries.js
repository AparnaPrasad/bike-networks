import { SET_COUNTRIES } from '../Utils/const';

export const setBikesByCountries = products => ({
    type: SET_COUNTRIES,
    payload: products,
});
