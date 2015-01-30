// First test file
'use strict';

var expect = require('chai').expect;
// Node assert
var assert = require('assert');
var Backone = require('backbone');

var CatModel = require('../app/models/catModel.js');

var CatsCollection = require('../app/collections/catsCollection.js')

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

// Testing shallow comparison '==' with equal and node assert
describe('Assert', function () {
	describe('.equal()', function () {
		it('shallow comparison makes 8 equal to "8"', function () {
			var num = 8;
			var strNum = '8';
			assert.equal(num, strNum);
		});
	});
});

// Testing strict equality '===' with notStrictEqual and node assert
describe('Assert', function () {
	describe('.notStrictEqual()', function() {
		it('strict comparison makes 8 not equal to "8"', function () {
			var integer = 8;
			var string = '8';
			assert.notStrictEqual(string, integer);
		});
	});
});

// Testing deep equality for objects
describe('Assert', function () {
	describe('.deepEqual()', function () {
		it('should evaluate to true when comparing two simple objects w/ the same properties', function () {
			var myObj1 = {
				name: 'kris',
				age: 22
			};
			var myObj2 = {
				name: 'kris',
				age: 22
			};
			assert.deepEqual(myObj1, myObj2);
		});
		it('should evaluate to true when comparing two arrays with the same values', function () {
			var arr1 = [1,2,3];
			var arr2 = [1,2,3];
			assert.deepEqual(arr1,arr2);
		});
		it('should evaluate to true when comparing two Backbone objects toJSON format with the same properties', function () {
			var catModel1 = new CatModel();
			var catModel2 = new CatModel();
			assert.deepEqual(catModel1.toJSON(), catModel2.toJSON());
		});
	});
	describe('.notDeepEqual()', function () {
		it('should evaluate to true when comparing two Backbone objects toJSON format with different properties', function () {
			var catModel1 = new CatModel();
			var catModel2 = new CatModel();
			catModel2.set('name','kris');
			assert.notDeepEqual(catModel1.toJSON(),catModel2.toJSON());
		});
	});
});