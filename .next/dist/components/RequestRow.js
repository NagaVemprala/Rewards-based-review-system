'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _deployProduct = require('../ethereum/deployProduct');

var _deployProduct2 = _interopRequireDefault(_deployProduct);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\vmt907\\Documents\\ecommercefinal-react\\components\\RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: ''
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var deployedProduct, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              deployedProduct = (0, _deployProduct2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return deployedProduct.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onRate = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event, data) {
        var deployedProduct, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('so the address is right', _this.props.address);
                deployedProduct = (0, _deployProduct2.default)(_this.props.address);
                _context2.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context2.sent;

                console.log('this is the msg.sender ', accounts[0]);
                _context2.next = 8;
                return deployedProduct.methods.rateReview(data.rating, _this.props.id).send({
                  from: accounts[0]
                });

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          review = _props.review;

      console.log(review.reviewText);
      if (review.totalRatings > 0) {
        review.averageRating = review.sumTotalRating / review.totalRatings;
      } else {
        review.averageRating = 0;
      }

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_routes.Link, { route: '/products/' + this.props.address + '/' + id, params: { reviewNumber: '' + id }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, id))), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { padded: true, color: 'grey', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, ' ', review.reviewText, ' ')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Rating, { icon: 'star', defaultRating: review.averageRating, maxRating: 5,
        onRate: this.onRate, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, ' ', review.averageRating, ' '), ' ', review.averageRating), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, review.totalRatings), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, review.complete), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, ' ', review.reviewerAddress, ' ')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIlJhdGluZyIsIlNlZ21lbnQiLCJMYWJlbCIsIk1lc3NhZ2UiLCJ3ZWIzIiwiZWNvbW1lcmNlUmV2aWV3cyIsIkxpbmsiLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJvbkFwcHJvdmUiLCJkZXBsb3llZFByb2R1Y3QiLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm9uUmF0ZSIsImV2ZW50IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyYXRlUmV2aWV3IiwicmF0aW5nIiwiUm93IiwiQ2VsbCIsInJldmlldyIsInJldmlld1RleHQiLCJ0b3RhbFJhdGluZ3MiLCJhdmVyYWdlUmF0aW5nIiwic3VtVG90YWxSYXRpbmciLCJyZXZpZXdOdW1iZXIiLCJjb21wbGV0ZSIsInJldmlld2VyQWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBUSxBQUFRLEFBQVMsQUFBTzs7QUFDaEQsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O29OQUNKLEE7b0JBQVEsQSxBQUNRO0FBRFIsQUFDTixhQUdGLEEscUZBQVksbUJBQUE7MkJBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ0o7QUFESSxnQ0FDYyw2QkFBaUIsTUFBQSxBQUFLLE1BRHBDLEFBQ2MsQUFBNEI7OEJBRDFDO3FCQUdhLGNBQUEsQUFBSyxJQUhsQixBQUdhLEFBQVM7O2lCQUExQjtBQUhJLGtDQUFBOzhCQUFBO3FDQUlKLEFB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