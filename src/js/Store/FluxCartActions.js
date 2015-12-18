var AppDispatcher = require('Shared/Dispatcher');
var FluxCartConstants = require('Store/FluxCartConstants');

var FluxCartActions = {
	receiveProduct: function (data) {
		AppDispatcher.handleViewAction({
			actionType: FluxCartConstants.RECEIVE_DATA,
			data: data
		});
	},

	selectProduct: function (index) {
		AppDispatcher.handleViewAction({
			actionType: FluxCartConstants.SET_SELECTED,
			data: index
		});
	},

	addToCart: function (sku, update) {
		AppDispatcher.handleViewAction({
			actionType: FluxCartConstants.CART_ADD,
			sku: sku,
			update: update
		});
	},

	removeFromCart: function (sku) {
		AppDispatcher.handleViewAction({
			actionType: FluxCartConstants.CART_REMOVE,
			sku: sku
		});
	},

	updateCartVisible: function (cartVisible) {
		AppDispatcher.handleViewAction({
			actionType: FluxCartConstants.CART_VISIBLE,
			cartVisible: cartVisible
		});
	}
};

module.exports = FluxCartActions;