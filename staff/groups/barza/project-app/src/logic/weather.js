import axios from 'axios';

// &units=metric
// ?q=&apikey=',

const WeatherService = {
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
    key: '8366b9d91e65249d0c067fd7f4ca6c45',

    getWeather(city) {
        return axios
            .get(`${this.baseUrl}?q=${city}&apikey=${this.key}&units=metric`)
            .then(res => res.data);
    }
};

export default WeatherService;
