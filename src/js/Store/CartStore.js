var AppDispatcher = require('Shared/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('Store/FluxCartConstants');
var _ = require('underscore');

var _products = {};
var _cartVisible = false;

function add(sku, update) {
	update.quantitiy = sku in _products ? _products[sku].quantitiy + 1 : 1;
	_products[sku] = _.extend({}, _products[sku], update);
}

function setCartVisible(cartVisible) {
	_cartVisible = cartVisible;
}

function removeItem(sku) {
	delete _products[sku];
}

var CartStore = _.extend({}, EventEmitter.prototype, {
	getCartItems: function () {
		return _products;
	},

	getCartCount: function () {
		return Object.keys(_products).length;
	},

	getCartTotal: function () {
		var total = 0;

		for (product in _products) {
			if (_products.hasOwnProperty(product)) {
				total += _products[product].price * _products[product].quantitiy;
			}
		}

		return total.toFixed(2);
	},

	getCartVisible: function () {
		return _cartVisible;
	}
});

AppDispatcher.register(function (payload) {
	var action = payload.action;

	switch(action.actionType) {
		case FluxCartConstants.CART_ADD:
			add(action.sku, action.update);
			break;

		case FluxCartConstants.CART_VISIBLE:
			setCartVisible(action.cartVisible);
			break;

		case FluxCartConstants.CART_REMOVE:
			removeItem(action.sku);
			break;

		default:
			return true;
	}

	CartStore.emit('change');

	return true;
});

module.exports = CartStore;