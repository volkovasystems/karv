const assert = require( "assert" );
const karv = require( "./karv.js" );

assert.deepEqual( karv( { "name": "simple" } ),
	{ "name": "simple" }, "should be equal to { 'name': 'simple' }" );

assert.equal( typeof karv( { "name": "simple" } ) == "object",
	true, "should be equal to true" );

assert.deepEqual( karv( Object.freeze( { "name": "simple" } ) ),
	{ "name": "simple" }, "should be equal to { 'name': 'simple' }" );

console.log( "ok" );
