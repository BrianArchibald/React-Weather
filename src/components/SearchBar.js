import React from 'react';

class SearchBar extends React.Component {
	state = { location: '' };

	onInputChange = event => {
		this.setState({ location: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.location);
	};

	render () {
		return (
			<div className="search-container">
				<form className="search-form" onSubmit={this.onFormSubmit}>
					<div className="search-input">
						<label>Location</label>
						<input type="text" value={this.state.location} onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}


export default SearchBar;