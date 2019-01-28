import React from 'react';


class App extends React.Component {

	render() {
		return (
			<div className="container">
				<h1>Header Title</h1>
				<div className="main-weather">
					<h2>Search Bar</h2>
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