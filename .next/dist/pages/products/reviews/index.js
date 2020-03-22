'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _deployProduct = require('../../../ethereum/deployProduct');

var _deployProduct2 = _interopRequireDefault(_deployProduct);

var _routes = require('../../../routes');

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\vmt907\\Documents\\ecommercefinal-react\\pages\\products\\reviews\\index.js?entry';


var showReviews = function (_Component) {
  (0, _inherits3.default)(showReviews, _Component);

  function showReviews() {
    (0, _classCallCheck3.default)(this, showReviews);

    return (0, _possibleConstructorReturn3.default)(this, (showReviews.__proto__ || (0, _getPrototypeOf2.default)(showReviews)).apply(this, arguments));
  }

  (0, _createClass3.default)(showReviews, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      console.log(this.props.reviews);
      return this.props.reviews.map(function (review, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          review: review,
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Reviews'), _react2.default.createElement(_routes.Link, { route: '/products/' + this.props.address + '/reviews/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Add Review'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Id'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'review'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'average rating'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'total ratings'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Rewards Issued'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Reviewer Address'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Found ', this.props.reviewsCount, ' reviews.'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, deployedProduct, reviewsCount, reviews;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;

                console.log('Right address is not fetched ', address);
                deployedProduct = (0, _deployProduct2.default)(address);
                _context.next = 5;
                return deployedProduct.methods.getReviewsCount().call();

              case 5:
                reviewsCount = _context.sent;
                _context.next = 8;
                return _promise2.default.all(Array(parseInt(reviewsCount)).fill().map(function (element, index) {
                  return deployedProduct.methods.reviews(index).call();
                }));

              case 8:
                reviews = _context.sent;
                return _context.abrupt('return', { address: address, reviews: reviews, reviewsCount: reviewsCount });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return showReviews;
}(_react.Component);

exports.default = showReviews;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9kdWN0c1xccmV2aWV3c1xcaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIlJhdGluZyIsIkxheW91dCIsImVjb21tZXJjZVJldmlld3MiLCJMaW5rIiwiUmVxdWVzdFJvdyIsInNob3dSZXZpZXdzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwicmV2aWV3cyIsIm1hcCIsInJldmlldyIsImluZGV4IiwiYWRkcmVzcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwibWFyZ2luQm90dG9tIiwicmVuZGVyUm93cyIsInJldmlld3NDb3VudCIsInF1ZXJ5IiwiZGVwbG95ZWRQcm9kdWN0IiwibWV0aG9kcyIsImdldFJldmlld3NDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFPOztBQUN4QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7OztpQ0FlVzttQkFDVDs7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO2tCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsSUFBSSxVQUFBLEFBQUMsUUFBRCxBQUFTLE9BQVUsQUFDN0M7K0JBQ0ksQUFBQztlQUFELEFBQ0ssQUFDTDtjQUZBLEFBRUksQUFDSjtrQkFIQSxBQUdRLEFBQ1I7bUJBQVMsT0FBQSxBQUFLLE1BSmQsQUFJb0I7O3NCQUpwQjt3QkFESixBQUNJLEFBT1g7QUFQVztBQUNBLFNBREE7QUFGUixBQUFPLEFBVVosT0FWWTs7Ozs2QkFZSjtVQUFBLEFBQ0MsU0FERCxBQUNtQyx1QkFEbkMsQUFDQztVQURELEFBQ1MsTUFEVCxBQUNtQyx1QkFEbkMsQUFDUztVQURULEFBQ2MsYUFEZCxBQUNtQyx1QkFEbkMsQUFDYztVQURkLEFBQzBCLE9BRDFCLEFBQ21DLHVCQURuQyxBQUMwQixBQUNqQzs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNEJBQUEsQUFBQyw4QkFBSyxzQkFBb0IsS0FBQSxBQUFLLE1BQXpCLEFBQStCLFVBQXJDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFPLEVBQUUsY0FBekMsQUFBdUMsQUFBZ0I7b0JBQXZEO3NCQUFBO0FBQUE7U0FKTixBQUVFLEFBQ0UsQUFDRSxBQUtKLGlDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLG1DQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSxrQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0EsbUNBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBUk4sQUFDRSxBQUNFLEFBTUUsQUFHSix1Q0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQXBCSixBQVNFLEFBV0UsQUFBTyxBQUFLLEFBRWQsZ0NBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVksZUFBQSxBQUFLLE1BQWpCLEFBQXVCLGNBdkIzQixBQUNFLEFBc0JFLEFBR0w7Ozs7OzJHQXZEMkIsQTs7Ozs7bUJBQ2Q7QSwwQkFBWSxNLEFBQU0sTSxBQUFsQixBQUNSOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxpQ0FBWixBQUE2QyxBQUN2QztBLGtDQUFrQiw2QkFBQSxBLEFBQWlCOzt1QkFDZCxnQkFBQSxBQUFnQixRQUFoQixBQUF3QixrQkFBeEIsQUFBMEMsQTs7bUJBQS9EO0E7O3lDQUVnQixBQUFRLFVBQVUsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUMzRjt5QkFBTyxnQkFBQSxBQUFnQixRQUFoQixBQUF3QixRQUF4QixBQUFnQyxPQUF2QyxBQUFPLEFBQXVDLEFBQ2pEO0FBRnFCLEFBQVksQSxpQkFBQSxDQUFaOzttQkFBaEI7QTtpREFJQyxFQUFFLFNBQUYsU0FBVyxTQUFYLFNBQW9CLGMsQUFBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaVyxBLEFBNEQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy92bXQ5MDcvRG9jdW1lbnRzL2Vjb21tZXJjZWZpbmFsLXJlYWN0In0=