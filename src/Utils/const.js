export const FETCH_BIKES_BEGIN   = 'FETCH_BIKES_BEGIN';
export const FETCH_BIKES_SUCCESS = 'FETCH_BIKES_SUCCESS';
export const FETCH_BIKES_FAILURE = 'FETCH_BIKES_FAILURE';
export const SET_CITIES = 'SET_CITIES';
export const SET_COUNTRIES = 'SET_BIKES_BY_COUNTRIES';
export const table_fields={
    id:'id',
    name: 'name',
    city: 'city',
    country: 'country'
};

export const country_key = "country";
export const city_key = "city";
export const both_key = "both";
export const group_by = [ {key: country_key, value: "Country"},{key: city_key, value: "City"}, {key: both_key, value: "Both"}]
   