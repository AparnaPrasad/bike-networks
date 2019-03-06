import { SET_CITIES } from '../Utils/const';

export const setBikesByCities = products => ({
    type: SET_CITIES,
    payload: products,
});
