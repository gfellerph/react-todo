var FluxCartActions = require('./FluxCartActions');

/**
 * Mock a Ajax request to a API endpoint by
 * grabbing static data from localStorage
 * @return {void}
 */
var API = {
	getProductData: function () {
		var data = JSON.parse(localStorage.getItem('product'));
		FluxCartActions.receiveProduct(data);
	}
}

module.exports = API;