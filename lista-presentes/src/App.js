import Site from './Site.js';
import FirebaseService from './services/FirebaseService.js';
import React from 'react';


class App extends React.Component {

	componentDidMount() {
			new FirebaseService().getUtilidades()
	}

	render() {
		return (
			<div className="App">
				<Site />
			</div>
		);
	}
}

export default App;
