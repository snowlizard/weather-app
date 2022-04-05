const citiesReducer = (state = defaultState, action ) => {
    switch(action.type){
        case 'CHANGE_CITY':
            return {
                ... action.payload.data
            }
        default:
            return state;
    }
}


export default citiesReducer;

const defaultState = {
    "coord": {
      "lon": 139.6917,
      "lat": 35.6895
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 53.51,
      "feels_like": 52.7,
      "temp_min": 49.78,
      "temp_max": 56.55,
      "pressure": 1019,
      "humidity": 88
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.44,
      "deg": 80
    },
    "clouds": {
      "all": 75
    },
    "dt": 1649190183,
    "sys": {
      "type": 2,
      "id": 2038398,
      "country": "JP",
      "sunrise": 1649190079,
      "sunset": 1649235953
    },
    "timezone": 32400,
    "id": 1850144,
    "name": "Tokyo",
    "cod": 200
};