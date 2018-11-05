import React, { Component } from 'react';
import { Provider } from 'react-redux'

import './App.css';
import store from './redux/store';
import TrackContainer from './components/track/TrackContainer';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<TrackContainer />
				</div>
			</Provider>
		);
	}
}

export default App;
