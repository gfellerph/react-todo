import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	render () {
		return <h1>Heyppp</h1>
	}
}

ReactDom.render(<App />, document.querySelector('#app'));