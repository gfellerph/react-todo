var React = require('react');

var WorldComponent = React.createClass({

	/**
	 * Add one to the counter
	 * @return {void}
	 */
	incrementCount: function () {
		this.setState({
			count: this.state.count + 1
		});
	},

	/**
	 * Initiate the component
	 * @return {Function} Get the initial state
	 */
	getInitialState: function () {
		return {
			count: 5
		}
	},

	/**
	 * Render template
	 * @return {Function} The template HTML
	 */
	render: function () {
		return (
			<div>
				<h1>Hello, {this.props.adjective} {this.state.count} worlds!</h1>
				<button onClick={this.incrementCount}>Increment worlds</button>
			</div>	
		);
	}
});

module.exports = WorldComponent;