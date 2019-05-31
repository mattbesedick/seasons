import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {

//     return <div></div>
// }

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { lat: null, errorMessage: ' ' };
	// }

	state = { lat: null, errorMessage: '' };

	render() {
		if (this.state.errorMessage && !this.state.lat) {
			console.log('this is gettiing called first');
			return <div>Error: {this.state.errorMessage}</div>;
		}
		console.log('second check');
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Spinner />;
	}

	// Lifecyle methods of a component
	componentDidMount() {
		//console.log("My component did render to screen");
		navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	componentDidUpdate() {
		console.log('My component did update');
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
