// My Backbone Cats Collection
'use strict';

var Backbone = require('backbone');
var CatModel = require('../models/catModel');

// Cats Collection
var CatsCollection = Backbone.Collection.extend ({
	model: CatModel
});

module.exports = CatsCollection;