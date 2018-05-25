import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Header from './../header/Header';

import WeatherService from './../../logic/weather';

class Weather extends Component {
    state = {
        isLoaded: false,
        isLogged: true,
        weather: {},
        city: '',
        search: false
    };

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user.token;

            token.length && this.setState({ isLogged: true });

            this.setState({
                isLogged: true
            });
        } else {
            this.setState({
                isLogged: false
            });
        }
    }

    handleCity = e => {
        const val = e.target.value.trim();

        this.setState({
            city: val
        });
    };

    handleSubmitWeather = e => {
        e.preventDefault();

        if (this.state.city !== '') {
            this.setState(
                {
                    search: true,
                    isLoaded: false
                },
                () => {
                    setTimeout(() => {
                        WeatherService.getWeather(this.state.city).then(
                            ({ name, main, weather }) => {
                                const myWeather = {
                                    temp: main.temp,
                                    icon: `https://openweathermap.org/img/w/${
                                        weather[0].icon
                                    }.png`,
                                    desc: weather[0].description,
                                    cityName: name
                                };

                                this.setState({
                                    isLoaded: true,
                                    weather: myWeather,
                                    city: ''
                                });
                            }
                        );
                    }, 1000);
                }
            );
        }
    };

    renderWeather() {
        if (this.state.search === false) return null;

        if (this.state.isLoaded === false) {
            return (
                <div className="container mt-2">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <h1 className="text-info">
                                Sergio is fetching the weather...
                            </h1>
                        </div>
                    </div>
                </div>
            );
        } else {
            const { temp, icon, desc, cityName } = this.state.weather;

            return (
                <div className="container mt-5 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="card">
                                <img
                                    className="card-img-top"
                                    src="https://avatars0.githubusercontent.com/u/36748030?s=400&v=4"
                                    alt="Sergio the Weatherman"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h5 className="card-title no-margin">
                                        Er'Weather pa tu body in{' '}
                                        <span className="text-warning">
                                            {cityName}
                                        </span>
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                        🌡 {temp}
                                        <img src={icon} alt="Weatherrrrr" />
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return this.state.isLogged === false ? (
            <Redirect to="/" />
        ) : (
            <div>
                <Header isLogged={true} />
                <div className="container mt-5 mb-5">
                    <h1 className="text-center">
                        Sergio the{' '}
                        <span className="text-warning">WeatherMan</span> Brings
                        you....
                    </h1>
                    <hr />

                    <div className="row justify-content-center">
                        <div className="col-6">
                            <form onSubmit={this.handleSubmitWeather}>
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Enter a city to get the weather"
                                    value={this.state.city}
                                    onChange={this.handleCity}
                                />

                                <button className="btn btn-secondary btn-block mt-2">
                                    Get the weather
                                </button>
                            </form>
                        </div>
                    </div>

                    {this.renderWeather()}
                </div>
            </div>
        );
    }
}

export default Weather;
