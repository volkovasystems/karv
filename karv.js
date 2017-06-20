"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "karv",
			"path": "karv/karv.js",
			"file": "karv.js",
			"module": "karv",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/karv.git",
			"test": "karv-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Create a shallow copy of object's enumerable properties if it is frozen, sealed or non-extensible.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"falzy": "falzy",
			"protype": "protype",
			"publist": "publist"
		}
	@end-include
*/

const doubt = require( "doubt" );
const falzy = require( "falzy" );
const protype = require( "protype" );
const publist = require( "publist" );

const karv = function karv( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": "object"
			}
		@end-meta-configuration
	*/

	if( falzy( entity ) || !protype( entity, OBJECT ) ){
		throw new Error( "invalid entity" );
	}

	if( Object.isExtensible( entity ) &&
		!Object.isSealed( entity ) &&
	 	!Object.isFrozen( entity ) )
	{
		return entity;
	}

	let copy = { };
	if( doubt( entity, ARRAY ) ){
		copy = entity.map( ( element ) => {
			return element;
		} );
	}

	publist( entity ).forEach( ( definition ) => {
		copy[ definition.property ] = definition.value;
	} );

	return copy;
};

module.exports = karv;
