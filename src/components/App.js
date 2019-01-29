import React from 'react';
import SearchBar from './SearchBar';
import weather from '../api/weather';


class App extends React.Component {

	componentDidMount() {
		this.onLocationSubmit('New York');
	};

	onLocationSubmit = async location => {
		const response = await weather.get('/weather', {
			params: {
				q: location
			}
		});
	};

	render() {
		return (
			<div className="container">
				<h1>Header Title</h1>
				<div className="main-weather">
					<SearchBar onFormSubmit={this.onLocationSubmit} />
					<h2>Current Weather Details</h2>
					<div className="daily">
						<h3>Daily Weather</h3>
					</div>
					<div className="hourly">
						<h3>Hourly Weather</h3>
					</div>
				</div>
			</div>
		);
	} 
};

export default App;