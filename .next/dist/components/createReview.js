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

var _deployProduct = require('../ethereum/deployProduct');

var _deployProduct2 = _interopRequireDefault(_deployProduct);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\vmt907\\Documents\\ecommercefinal-react\\components\\createReview.js';


var createReview = function (_Component) {
  (0, _inherits3.default)(createReview, _Component);

  function createReview() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, createReview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = createReview.__proto__ || (0, _getPrototypeOf2.default)(createReview)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      reviewText: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var deployedProduct, accounts, _accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                console.log(_this.props.address);
                deployedProduct = (0, _deployProduct2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });

                if (!(typeof _this.props.reviewNumber == "undefined")) {
                  _context.next = 19;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 11;
                return deployedProduct.methods.createReview(_this.state.reviewText, accounts[0]).send({
                  from: accounts[0]
                });

              case 11:

                _routes.Router.replaceRoute('/products/' + _this.props.address);
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](5);

                _this.setState({ errorMessage: _context.t0.message });

              case 17:
                _context.next = 31;
                break;

              case 19:
                _context.prev = 19;
                _context.next = 22;
                return _web2.default.eth.getAccounts();

              case 22:
                _accounts = _context.sent;
                _context.next = 25;
                return deployedProduct.methods.updateReview(_this.state.reviewText, _this.props.reviewNumber).send({
                  from: _accounts[0]
                });

              case 25:

                _routes.Router.replaceRoute('/products/' + _this.props.address);
                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t1 = _context['catch'](19);

                _this.setState({ errorMessage: _context.t1.message });

              case 31:

                _this.setState({ loading: false, reviewText: '' });

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 14], [19, 28]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(createReview, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'New Review or Update Your Existing Review'), _react2.default.createElement(_semanticUiReact.TextArea, {
        reviewText: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ reviewText: event.target.value });
        },
        label: 'TEXT',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Post Review'));
    }
  }]);

  return createReview;
}(_react.Component);

exports.default = createReview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNyZWF0ZVJldmlldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJUZXh0QXJlYSIsIk1lc3NhZ2UiLCJCdXR0b24iLCJlY29tbWVyY2VSZXZpZXdzIiwid2ViMyIsIlJvdXRlciIsImNyZWF0ZVJldmlldyIsInN0YXRlIiwicmV2aWV3VGV4dCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJhZGRyZXNzIiwiZGVwbG95ZWRQcm9kdWN0Iiwic2V0U3RhdGUiLCJyZXZpZXdOdW1iZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInVwZGF0ZVJldmlldyIsInZhbHVlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFVLEFBQVM7O0FBQ2xDLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7d05BQ0osQTtrQkFBUSxBQUNNLEFBQ1o7b0JBRk0sQUFFUSxBQUNkO2VBSE0sQUFHRyxBO0FBSEgsQUFDTixhQUtGLEE7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO3VDQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBRU47O3dCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDakI7QUFKRyxrQ0FJZSw2QkFBaUIsTUFBQSxBQUFLLE1BSnJDLEFBSWUsQUFBNEIsQUFFcEQ7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBTnRCLEFBTVQsQUFBYyxBQUErQjs7c0JBRXpDLE9BQU8sTUFBQSxBQUFLLE1BQVosQUFBa0IsZ0JBUmIsQUFRNkIsY0FSN0I7a0NBQUE7QUFBQTtBQUFBOztnQ0FBQTtnQ0FBQTt1QkFVa0IsY0FBQSxBQUFLLElBVnZCLEFBVWtCLEFBQVM7O21CQUExQjtBQVZELG9DQUFBO2dDQUFBO3VDQVdDLEFBQWdCLFFBQWhCLEFBQXdCLGFBQWEsTUFBQSxBQUFLLE1BQTFDLEFBQWdELFlBQVksU0FBNUQsQUFBNEQsQUFBUyxJQUFyRSxBQUF5RTt3QkFDekUsU0FaRCxBQVdDLEFBQThFLEFBQzlFLEFBQVM7QUFEcUUsQUFDcEYsaUJBRE07O21CQUlOOzsrQkFBQSxBQUFPLDRCQUEwQixNQUFBLEFBQUssTUFmakMsQUFlTCxBQUE0QztnQ0FmdkM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBaUJMOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBakJ6QixBQWlCTCxBQUFjLEFBQW9COzttQkFqQjdCO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dDQUFBO3VCQXFCa0IsY0FBQSxBQUFLLElBckJ2QixBQXFCa0IsQUFBUzs7bUJBQTFCO0FBckJELHFDQUFBO2dDQUFBO3VDQXNCQyxBQUFnQixRQUFoQixBQUF3QixhQUFhLE1BQUEsQUFBSyxNQUExQyxBQUFnRCxZQUFZLE1BQUEsQUFBSyxNQUFqRSxBQUF1RSxjQUF2RSxBQUFxRjt3QkFDckYsVUF2QkQsQUFzQkMsQUFBMEYsQUFDMUYsQUFBUztBQURpRixBQUNoRyxpQkFETTs7bUJBSU47OytCQUFBLEFBQU8sNEJBQTBCLE1BQUEsQUFBSyxNQTFCakMsQUEwQkwsQUFBNEM7Z0NBMUJ2QztBQUFBOzttQkFBQTtnQ0FBQTtnREE0Qkw7O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUE1QnpCLEFBNEJMLEFBQWMsQUFBb0I7O21CQUt0Qzs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sWUFqQ3ZCLEFBaUNULEFBQWMsQUFBOEI7O21CQWpDbkM7bUJBQUE7Z0NBQUE7O0FBQUE7MkNBQUE7QTs7Ozs7Ozs7Ozs2QkFvQ0Y7bUJBQ1A7OzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsOERBQUEsQUFBQztvQkFDYSxLQUFBLEFBQUssTUFEbkIsQUFDeUIsQUFDdkI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxZQUFZLE1BQUEsQUFBTSxPQUEzQyxBQUFTLEFBQWMsQUFBMkI7QUFGOUQsQUFHRTtlQUhGLEFBR1EsQUFDTjt1QkFKRixBQUlnQjs7b0JBSmhCO3NCQUhKLEFBQ0UsQUFFRSxBQVFGO0FBUkU7QUFDRSwyQkFPSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQVhGLEFBV0UsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUE7QUFBQTtTQWJKLEFBQ0UsQUFZRSxBQUtMOzs7OztBQTlEd0IsQSxBQWlFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiY3JlYXRlUmV2aWV3LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3ZtdDkwNy9Eb2N1bWVudHMvZWNvbW1lcmNlZmluYWwtcmVhY3QifQ==