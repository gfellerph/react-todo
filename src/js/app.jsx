var React          = require('react');
var ReactDOM       = require('react-dom');
var FilteredList   = require('FilteredList/FilteredListComponent');
var WorldComponent = require('World/WorldComponent');

var ProductData    = require('Store/ProductData');
var CartAPI        = require('Store/CartAPI');
var FluxCartApp    = require('Store/FluxCartApp');

// Load mock data in localStorage
ProductData.init();

// Call mock API
CartAPI.getProductData();

ReactDOM.render(
	<div>
		<WorldComponent adjective="cruel" />
		<hr />
		<FilteredList />
		<hr />
		<FluxCartApp />
	</div>,
	document.getElementById('app')
);