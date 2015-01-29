// First test file
'use strict';

var expect = require('chai').expect;

var Backone = require('backbone');

var CatModel = require('../app/models/catModel.js');

var CatsCollection = require('../app/collections/catsCollection.js')

// Testing my Backbone Model 'CatModel'
describe('CatModel', function () {
	describe('.get()', function() {
		it('should get the desired attribute', function () {
			var catModel = new CatModel();
			var catName = catModel.get('name');
			expect(catName).to.equal('Ralph');
		});
	});
	describe('.meow()', function() {
		it('should should return a meow string', function() {
			var catModel = new CatModel();
			var meowString = catModel.meow();
			expect(meowString).to.equal('Meeooow');
		});
	});
});

// Testing my Backbone Collection 'CatsCollection''
// Writing the tests firsts this time
describe('CatsCollection', function() {
	describe('.pluck()', function() {
		it('should pluck the name attribute from each model in the collection', function () {
			var catsCollection = new CatsCollection();
			var catModel = new CatModel();
			catsCollection.add(catModel);
			var nameAttr = catsCollection.pluck('name');
			expect(nameAttr.toString()).to.equal('Ralph');
		});
	});
	describe('.at()', function () {
		it('should return the model in the collection', function () {
			var catsCollection = new CatsCollection();
			var catModel = new CatModel();
			catsCollection.add(catModel);
			expect(catsCollection.get(catModel)).to.equal(catsCollection.at(0));
		})
	})
});

// Testing standard JS types
describe('Array', function () {
	describe('.push()', function () {
		it('should add an element', function () {
			var arr = [];
			arr.push('cat');
			expect(arr[0]).to.equal('cat');
		});
	});
	describe('.pop()', function () {
		it('should remove the last element', function () {
			var arr = ['cat','dog'];
			arr.pop();
			expect(arr.length).to.equal(1);
		});
	});
	describe('.reverse()', function () {
		it('should reverse the elements', function () {
			var arr = ['cat','dog'];
			expect(arr[0]).to.equal('cat');
			arr.reverse();
			expect(arr[0]).to.equal('dog');
		});
	});
});

describe('String', function () {
	describe('.length', function () {
		it('should return the length of the string', function () {
			var strEmpty = '';
			expect(strEmpty.length).to.equal(0);
			var strFull = 'chicken';
			expect(strFull.length).to.equal(7);
		});
	});
});

describe('Number', function() {
	describe('.toString()', function () {
		it('should return the number in a string', function () {
			var myNumber = 42;
			expect(myNumber.toString()).to.equal('42');
		});
	});
});	