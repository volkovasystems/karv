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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthcnYuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJkb3VidCIsInJlcXVpcmUiLCJmYWx6eSIsImthcnYiLCJlbnRpdHkiLCJFcnJvciIsImNvcHkiLCJBUlJBWSIsIm1hcCIsImVsZW1lbnQiLCJwcm9wZXJ0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsTUFBZixFQUF1QjtBQUNuQzs7Ozs7Ozs7QUFRQSxLQUFJRixNQUFPRSxNQUFQLEtBQW1CLFFBQU9BLE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBeEMsRUFBa0Q7QUFDakQsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksNEJBQXFCRCxNQUFyQjtBQUNILEVBQUMsd0JBQWlCQSxNQUFqQixDQURFO0FBRUYsRUFBQyx3QkFBaUJBLE1BQWpCLENBRkg7QUFHQTtBQUNDLFNBQU9BLE1BQVA7QUFDQTs7QUFFRCxLQUFJRSxPQUFPLEVBQVg7QUFDQSxLQUFJTixNQUFPSSxNQUFQLEVBQWVHLEtBQWYsQ0FBSixFQUE0QjtBQUMzQkQsU0FBT0YsT0FBT0ksR0FBUCxDQUFZLFVBQUVDLE9BQUYsRUFBZTtBQUNqQyxVQUFPQSxPQUFQO0FBQ0EsR0FGTSxDQUFQO0FBR0E7O0FBRUQsTUFBSyxJQUFJQyxRQUFULElBQXFCTixNQUFyQixFQUE2QjtBQUM1QkUsT0FBTUksUUFBTixJQUFtQk4sT0FBUU0sUUFBUixDQUFuQjtBQUNBOztBQUVELFFBQU9KLElBQVA7QUFDQSxDQWhDRDs7QUFrQ0FLLE9BQU9DLE9BQVAsR0FBaUJULElBQWpCIiwiZmlsZSI6ImthcnYuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJrYXJ2XCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImthcnYva2Fydi5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJrYXJ2LmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwia2FydlwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9rYXJ2LmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJrYXJ2LXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0Q3JlYXRlIGEgc2hhbGxvdyBjb3B5IG9mIG9iamVjdCdzIGVudW1lcmFibGUgcHJvcGVydGllcyBpZiBpdCBpcyBmcm96ZW4sIHNlYWxlZCBvciBub24tZXh0ZW5zaWJsZS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcblxyXG5jb25zdCBrYXJ2ID0gZnVuY3Rpb24ga2FydiggZW50aXR5ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCJvYmplY3RcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgfHwgdHlwZW9mIGVudGl0eSAhPSBcIm9iamVjdFwiICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIE9iamVjdC5pc0V4dGVuc2libGUoIGVudGl0eSApICYmXHJcblx0XHQhT2JqZWN0LmlzU2VhbGVkKCBlbnRpdHkgKSAmJlxyXG5cdCBcdCFPYmplY3QuaXNGcm96ZW4oIGVudGl0eSApIClcclxuXHR7XHJcblx0XHRyZXR1cm4gZW50aXR5O1xyXG5cdH1cclxuXHJcblx0bGV0IGNvcHkgPSB7IH07XHJcblx0aWYoIGRvdWJ0KCBlbnRpdHksIEFSUkFZICkgKXtcclxuXHRcdGNvcHkgPSBlbnRpdHkubWFwKCAoIGVsZW1lbnQgKSA9PiB7XHJcblx0XHRcdHJldHVybiBlbGVtZW50O1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Zm9yKCBsZXQgcHJvcGVydHkgaW4gZW50aXR5ICl7XHJcblx0XHRjb3B5WyBwcm9wZXJ0eSBdID0gZW50aXR5WyBwcm9wZXJ0eSBdO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvcHk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGthcnY7XHJcbiJdfQ==
//# sourceMappingURL=karv.support.js.map
