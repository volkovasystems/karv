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
              			"falzy": "falzy"
              		}
              	@end-include
              */var _isFrozen = require("babel-runtime/core-js/object/is-frozen");var _isFrozen2 = _interopRequireDefault(_isFrozen);var _isSealed = require("babel-runtime/core-js/object/is-sealed");var _isSealed2 = _interopRequireDefault(_isSealed);var _isExtensible = require("babel-runtime/core-js/object/is-extensible");var _isExtensible2 = _interopRequireDefault(_isExtensible);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var doubt = require("doubt");
var falzy = require("falzy");

var karv = function karv(entity) {
	/*;
                                  	@meta-configuration:
                                  		{
                                  			"entity:required": "object"
                                  		}
                                  	@end-meta-configuration
                                  */

	if (falzy(entity) || (typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) != "object") {
		throw new Error("invalid entity");
	}

	if ((0, _isExtensible2.default)(entity) &&
	!(0, _isSealed2.default)(entity) &&
	!(0, _isFrozen2.default)(entity))
	{
		return entity;
	}

	var copy = {};
	if (doubt(entity, ARRAY)) {
		copy = entity.map(function (element) {
			return element;
		});
	}

	for (var property in entity) {
		copy[property] = entity[property];
	}

	return copy;
};

module.exports = karv;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthcnYuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJkb3VidCIsInJlcXVpcmUiLCJmYWx6eSIsImthcnYiLCJlbnRpdHkiLCJFcnJvciIsImNvcHkiLCJBUlJBWSIsIm1hcCIsImVsZW1lbnQiLCJwcm9wZXJ0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsTUFBZixFQUF1QjtBQUNuQzs7Ozs7Ozs7QUFRQSxLQUFJRixNQUFPRSxNQUFQLEtBQW1CLFFBQU9BLE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBeEMsRUFBa0Q7QUFDakQsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksNEJBQXFCRCxNQUFyQjtBQUNILEVBQUMsd0JBQWlCQSxNQUFqQixDQURFO0FBRUYsRUFBQyx3QkFBaUJBLE1BQWpCLENBRkg7QUFHQTtBQUNDLFNBQU9BLE1BQVA7QUFDQTs7QUFFRCxLQUFJRSxPQUFPLEVBQVg7QUFDQSxLQUFJTixNQUFPSSxNQUFQLEVBQWVHLEtBQWYsQ0FBSixFQUE0QjtBQUMzQkQsU0FBT0YsT0FBT0ksR0FBUCxDQUFZLFVBQUVDLE9BQUYsRUFBZTtBQUNqQyxVQUFPQSxPQUFQO0FBQ0EsR0FGTSxDQUFQO0FBR0E7O0FBRUQsTUFBSyxJQUFJQyxRQUFULElBQXFCTixNQUFyQixFQUE2QjtBQUM1QkUsT0FBTUksUUFBTixJQUFtQk4sT0FBUU0sUUFBUixDQUFuQjtBQUNBOztBQUVELFFBQU9KLElBQVA7QUFDQSxDQWhDRDs7QUFrQ0FLLE9BQU9DLE9BQVAsR0FBaUJULElBQWpCIiwiZmlsZSI6ImthcnYuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwia2FydlwiLFxuXHRcdFx0XCJwYXRoXCI6IFwia2Fydi9rYXJ2LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJrYXJ2LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImthcnZcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2thcnYuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJrYXJ2LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q3JlYXRlIGEgc2hhbGxvdyBjb3B5IG9mIG9iamVjdCdzIGVudW1lcmFibGUgcHJvcGVydGllcyBpZiBpdCBpcyBmcm96ZW4sIHNlYWxlZCBvciBub24tZXh0ZW5zaWJsZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5cbmNvbnN0IGthcnYgPSBmdW5jdGlvbiBrYXJ2KCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCJvYmplY3RcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBlbnRpdHkgKSB8fCB0eXBlb2YgZW50aXR5ICE9IFwib2JqZWN0XCIgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xuXHR9XG5cblx0aWYoIE9iamVjdC5pc0V4dGVuc2libGUoIGVudGl0eSApICYmXG5cdFx0IU9iamVjdC5pc1NlYWxlZCggZW50aXR5ICkgJiZcblx0IFx0IU9iamVjdC5pc0Zyb3plbiggZW50aXR5ICkgKVxuXHR7XG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fVxuXG5cdGxldCBjb3B5ID0geyB9O1xuXHRpZiggZG91YnQoIGVudGl0eSwgQVJSQVkgKSApe1xuXHRcdGNvcHkgPSBlbnRpdHkubWFwKCAoIGVsZW1lbnQgKSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9ICk7XG5cdH1cblxuXHRmb3IoIGxldCBwcm9wZXJ0eSBpbiBlbnRpdHkgKXtcblx0XHRjb3B5WyBwcm9wZXJ0eSBdID0gZW50aXR5WyBwcm9wZXJ0eSBdO1xuXHR9XG5cblx0cmV0dXJuIGNvcHk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGthcnY7XG4iXX0=
//# sourceMappingURL=karv.support.js.map
