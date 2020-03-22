'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _ecommerceReviews = require('./build/ecommerceReviews.json');

var _ecommerceReviews2 = _interopRequireDefault(_ecommerceReviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(_ecommerceReviews2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxkZXBsb3lQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJjb21waWxlZEZhY3RvcnkiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1QixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDM0I7UUFBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsMkJBQWdCLEFBQTNCLEFBQXRCLFlBQTZELEFBQTdELEFBQVAsQUFDQTtBQUZEIiwiZmlsZSI6ImRlcGxveVByb2R1Y3QuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdm10OTA3L0RvY3VtZW50cy9lY29tbWVyY2VmaW5hbC1yZWFjdCJ9