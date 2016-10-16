/**
 * Created by Steve on 13/03/2016.
 */

// **
// ** Predicate & Iteratee shorthands
// **

var _ = require('lodash');
var res;

var users = [
  {
    name: 'Steve',
    age: 30,
    is_premium: false
  },
  {
    name: 'Bob',
    age: 20,
    is_premium: false
  },
  {
    name: 'Kylie',
    age: 25,
    is_premium: true
  }
];

//standard syntax - plain fn provided, fn used directly
console.log('example: standard syntax - plain fn provided');
res = _.filter(users, function(user) {
          return user.age > 21;
        });
console.log('>result: ' + JSON.stringify(res) );  //Steve & Kylie

//shorthand - using a property string (truthy values returned)
console.log('example: shorthand - using a property string');
res =_.filter(users, 'is_premium');
console.log('>result: ' + JSON.stringify(res) );  //Kylie

//shorthand - using property name & value (returns matches)
console.log('example: shorthand - using a property name & value pair');
res =_.filter(users, ['name','Kylie']);
console.log('>result: ' + JSON.stringify(res) );  //Kylie

//shorthand - using object (returns containing matches)
console.log('example: shorthand - using object');
res =_.filter(users, {name:'Kylie'});
console.log('>result: ' + JSON.stringify(res) );  //Kylie


// **
// ** details of _.property(), _.matchesProperty(), _.matches() & _.bind()
// **


// ** example: _.property     (Predicate & Iteratee shorthand pass as: 'string' )
// **
console.log('example: _.property');
var f = _.property('name');
res = f({name: 'Steve'});
console.log('>result: ' + res);  //'Steve'

// ** example: _.matchesProperty     (Predicate & Iteratee shorthand pass as: [string, value] )
// **
console.log('example: _.matchesProperty');
//
var f = _.matchesProperty('name', 'Steve');
res = f({name: 'Steve'});
console.log('>result: ' + res);  //true

//can also call as _.matchesProperties(source)(given)
var res = _.matchesProperty('user.name', 'Steve')({user: {name: 'Steve'}});
console.log('>result: ' + res);  //true


// ** example: _.matches    (Predicate & Iteratee shorthand pass as: {obj} )
// **
console.log('example: _.matches');

var f = _.matches( {a: 1, b: 2} );
res = f( {a: 1, b: 3} );
console.log('>result: ' + res);  //false

//is not exact match, rather does source exist in given
//can also  call as _.matches(source)(given)
res = _.matches({name:'bob'})({name:'bob',age:100});
console.log('>result: ' + res);  //true


// ** example: this context (binding)
// **
console.log('example: this context (binding)');

var obj = {
  val: 10,
  add: function(n) {
    return this.val + n; }
};

var res = _.map([1, 2, 3], _.bind(obj.add, obj));
console.log('>result: ' + res);  //11,12,13