import axios from 'axios';

export const changeCity = (city) => {
    return {
        type: 'CHANGE_CITY',
        payload: axios.get(city)
    }
}