var React = require('react');
var List = require('./ListComponent');

var FilteredList = React.createClass({

	/**
	 * Filter the list
	 * @param  {Event} event Event object
	 * @return {void}
	 */
	filterList: function (event) {
		var updatedList = this.state.initialItems;

		updatedList = updatedList.filter(function (item) {
			return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		});

		this.setState({items: updatedList});
	},

	/**
	 * Init the component
	 * @return {Object} Init data
	 */
	getInitialState: function () {
		return {
			initialItems: [
				"Apples",
		        "Broccoli",
		        "Chicken",
		        "Duck",
		        "Eggs",
		        "Fish",
		        "Granola",
		        "Hash Browns"
			],
			items: []
		}
	},

	/**
	 * Executed when component is about to get
	 * rendered
	 * @return {void}
	 */
	componentWillMount: function () {
		this.setState({items: this.state.initialItems})
	},

	/**
	 * Define structure of the component
	 * @return {Component} React component
	 */
	render: function () {
		return (
			<div className="fiilter-list">
				<input type="text" placeholder="Search" onChange={this.filterList}/>
				<List items={this.state.items}/>
			</div>
		);
	}
});

module.exports = FilteredList;