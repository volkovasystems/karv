const assert = require( "assert" );
const karv = require( "./karv.js" );

assert.deepEqual( karv( { "name": "simple" } ), { "name": "simple" }, "should be deeply equal" );

assert.equal( typeof karv( { "name": "simple" } ) == "object", true, "should return true" );

console.log( "ok" );
