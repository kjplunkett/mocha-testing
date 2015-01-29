// Backbone Model for unit testing
'use strict';

var Backbone = require('backbone');

// Setup Cat Model
var CatModel = Backbone.Model.extend({

	defaults: {
		name: 'Ralph',
		furr: 'short',
		age: 4
	},

	// My custom meow method 
	meow: function () {
		return 'Meeooow';
	}
});

module.exports = CatModel;