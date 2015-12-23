var React                    = require('react');
var CartStore                = require('Store/CartStore');
var ProductStore             = require('Store/ProductStore');
var FluxCartProductComponent = require('Store/FluxCartProductComponent');
var FluxCartComponent        = require('Store/FluxCartComponent');

function getCartState() {
	return {
		product: ProductStore.getProduct(),
		selectedProduct: ProductStore.getSelected(),
		cartItems: CartStore.getCartItems(),
		cartCount: CartStore.getCartCount(),
		cartTotal: CartStore.getCartTotal(),
		cartVisible: CartStore.getCartVisible()
	};
}

var FluxCartApp = React.createClass({

	getInitialState: function () {
		return getCartState();
	},

	componentDidMount: function () {
		ProductStore.addListener('change', this._onChange);
		CartStore.addListener('change', this._onChange);
	},

	componentWillUnmount: function () {
		ProductStore.removeListener('change', this._onChange);
		CartStore.removeListener('change', this._onChange);
	},

	render: function () {
		return (
			<div className="flux-cart-app">
				<FluxCartComponent products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
				<FluxCartProductComponent product={this.state.product} cartItems={this.state.cartItems} selected={this.state.selectedProduct} />
			</div>
		);
	},

	_onChange: function () {
		this.setState(getCartState());
	}
});

module.exports = FluxCartApp;