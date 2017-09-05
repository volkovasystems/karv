"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "karv",
              			"path": "karv/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/karv.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"karv": "karv"
              		}
              	@end-include
              */var _freeze = require("babel-runtime/core-js/object/freeze");var _freeze2 = _interopRequireDefault(_freeze);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var karv = require("./karv.support.js");
//: @end-client







//: @client:
describe("karv", function () {

	describe("`karv( { 'name': 'simple' } )`", function () {
		it("should create a shallow copy of object's enumerable properties", function () {
			assert.deepEqual((0, _typeof3.default)(karv({ "name": "simple" })), "object");

			assert.deepEqual(karv({ "name": "simple" }), { "name": "simple" });
		});
	});

	describe("`karv( Object.freeze( { 'name': 'simple' } ) )`", function () {
		it("should create a shallow copy of frozen object's enumerable properties", function () {
			assert.deepEqual((0, _typeof3.default)(karv((0, _freeze2.default)({ "name": "simple" }))), "object");

			assert.deepEqual(karv((0, _freeze2.default)({ "name": "simple" })), { "name": "simple" });
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwia2FydiIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBO0FBQ0FFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QkEsVUFBVSxnQ0FBVixFQUE0QyxZQUFPO0FBQ2xEQyxLQUFJLGdFQUFKLEVBQXNFLFlBQU87QUFDNUVKLFVBQU9LLFNBQVAsdUJBQXlCSCxLQUFNLEVBQUUsUUFBUSxRQUFWLEVBQU4sQ0FBekIsR0FBdUQsUUFBdkQ7O0FBRUFGLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sRUFBRSxRQUFRLFFBQVYsRUFBTixDQUFsQixFQUFnRCxFQUFFLFFBQVEsUUFBVixFQUFoRDtBQUNBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLGlEQUFWLEVBQTZELFlBQU87QUFDbkVDLEtBQUksdUVBQUosRUFBNkUsWUFBTztBQUNuRkosVUFBT0ssU0FBUCx1QkFBeUJILEtBQU0sc0JBQWUsRUFBRSxRQUFRLFFBQVYsRUFBZixDQUFOLENBQXpCLEdBQXdFLFFBQXhFOztBQUVBRixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLHNCQUFlLEVBQUUsUUFBUSxRQUFWLEVBQWYsQ0FBTixDQUFsQixFQUFpRSxFQUFFLFFBQVEsUUFBVixFQUFqRTtBQUNBLEdBSkQ7QUFLQSxFQU5EOztBQVFBLENBbEJEO0FBbUJBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwia2FydlwiLFxuXHRcdFx0XCJwYXRoXCI6IFwia2Fydi90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva2Fydi5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwia2FydlwiOiBcImthcnZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGthcnYgPSByZXF1aXJlKCBcIi4va2Fydi5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImthcnZcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJga2FydiggeyAnbmFtZSc6ICdzaW1wbGUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY3JlYXRlIGEgc2hhbGxvdyBjb3B5IG9mIG9iamVjdCdzIGVudW1lcmFibGUgcHJvcGVydGllc1wiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdHlwZW9mIGthcnYoIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSApLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGthcnYoIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSApLCB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJga2FydiggT2JqZWN0LmZyZWV6ZSggeyAnbmFtZSc6ICdzaW1wbGUnIH0gKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjcmVhdGUgYSBzaGFsbG93IGNvcHkgb2YgZnJvemVuIG9iamVjdCdzIGVudW1lcmFibGUgcHJvcGVydGllc1wiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdHlwZW9mIGthcnYoIE9iamVjdC5mcmVlemUoIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSApICksIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCgga2FydiggT2JqZWN0LmZyZWV6ZSggeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9ICkgKSwgeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9ICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
