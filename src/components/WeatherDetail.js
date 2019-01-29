import React from 'react';

const WeatherDetail = ({ weather }) => {
	if(!weather) {
		return <div className="loading">Loading...</div>;
	}

	// const WeatherDetail = (props) => {
 //    const { weather } = props;

	return(
		<div className="weather-container">
			<div className="weather-general">
				<h3>{weather.name}</h3>
				<h4>{weather.weather.main}</h4>
				<h4>{weather.main.temp}</h4>
				<h4>{weather.main.temp_min}</h4>
				<h4>{weather.main.temp_max}</h4>
				<h4>{weather.weather.main}</h4>
			</div>
			<div className="weather-daily">

			</div>
			<div className="weather-hourly">

			</div>
		</div>
	);
	
}

export default WeatherDetail;