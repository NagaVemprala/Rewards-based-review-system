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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _deployProduct = require('../../ethereum/deployProduct');

var _deployProduct2 = _interopRequireDefault(_deployProduct);

var _routes = require('../../routes');

var _createReview = require('../../components/createReview');

var _createReview2 = _interopRequireDefault(_createReview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\vmt907\\Documents\\ecommercefinal-react\\pages\\products\\showProduct.js?entry';


var showProduct = function (_Component) {
    (0, _inherits3.default)(showProduct, _Component);

    function showProduct() {
        (0, _classCallCheck3.default)(this, showProduct);

        return (0, _possibleConstructorReturn3.default)(this, (showProduct.__proto__ || (0, _getPrototypeOf2.default)(showProduct)).apply(this, arguments));
    }

    (0, _createClass3.default)(showProduct, [{
        key: 'renderProductSummary',
        value: function renderProductSummary() {
            var _props = this.props,
                rewardValue = _props.rewardValue,
                totalReviews = _props.totalReviews,
                productOwner = _props.productOwner;

            var items = [{
                header: productOwner,
                meta: '',
                description: 'The product owner distributes rewards for helpful review ',
                style: { overflowWrap: 'break-word' }
            }, {
                header: rewardValue,
                meta: '',
                description: 'This is the maximum amount of cryptos distributed for writing helpful reviews '
            }, {
                header: totalReviews,
                meta: '',
                description: 'The number of reviews that are competing for rewards '
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Products Page'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, this.renderProductSummary()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_createReview2.default, { address: this.props.address, reviewNumber: this.props.reviewNumber, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_routes.Link, { route: '/products/' + this.props.address + '/reviews', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'View Reviews')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var deployedProduct, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                deployedProduct = (0, _deployProduct2.default)(props.query.address);

                                console.log('address ', props.query.address, 'props.query.reviewNumber', props.query.reviewNumber);
                                _context.next = 4;
                                return deployedProduct.methods.getProductSummary().call();

                            case 4:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    reviewNumber: props.query.reviewNumber,
                                    rewardValue: summary[0],
                                    totalReviews: summary[1],
                                    productOwner: summary[2]
                                });

                            case 6:
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

    return showProduct;
}(_react.Component);

exports.default = showProduct;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9kdWN0c1xcc2hvd1Byb2R1Y3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsImVjb21tZXJjZVJldmlld3MiLCJMaW5rIiwiQ3JlYXRlUmV2aWV3Iiwic2hvd1Byb2R1Y3QiLCJwcm9wcyIsInJld2FyZFZhbHVlIiwidG90YWxSZXZpZXdzIiwicHJvZHVjdE93bmVyIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInJlbmRlclByb2R1Y3RTdW1tYXJ5IiwiYWRkcmVzcyIsInJldmlld051bWJlciIsImRlcGxveWVkUHJvZHVjdCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJnZXRQcm9kdWN0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBa0I7Ozs7Ozs7OztJLEFBRW5COzs7Ozs7Ozs7OzsrQ0FpQnNCO3lCQUtuQixLQUxtQixBQUtkO2dCQUxjLEFBRXRCLHFCQUZzQixBQUV0QjtnQkFGc0IsQUFHdEIsc0JBSHNCLEFBR3RCO2dCQUhzQixBQUl0QixzQkFKc0IsQUFJdEIsQUFHRDs7Z0JBQU07d0JBQ04sQUFDUyxBQUNSO3NCQUZELEFBRU8sQUFDTjs2QkFIRCxBQUdjLEFBQ2I7dUJBQU8sRUFBRSxjQUxJLEFBQ2QsQUFJUSxBQUFnQjtBQUp4QixBQUNDLGFBRmE7d0JBT2QsQUFDUyxBQUNSO3NCQUZELEFBRU8sQUFDTjs2QkFWYSxBQU9kLEFBR2M7QUFIZCxBQUNDO3dCQUlELEFBQ1MsQUFDUjtzQkFGRCxBQUVPLEFBQ047NkJBZkQsQUFBYyxBQVlkLEFBR2MsQUFJYjtBQVBELEFBQ0M7O2lEQU1PLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBRUYsQUFDVDttQ0FDQyxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxrQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNFO0FBREY7QUFBQSwrQkFDRyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0U7QUFERjtBQUFBLCtCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQXdCO0FBQXhCO29CQURGLEFBQ0UsQUFBd0IsQUFBSyxBQUM3Qix5Q0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNFO0FBREY7K0JBQ0UsQUFBQyx3Q0FBYSxTQUFTLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxTQUFTLGNBQWMsS0FBQSxBQUFLLE1BQTlELEFBQW9FOzhCQUFwRTtnQ0FKTixBQUNFLEFBRUUsQUFDRSxBQUlKO0FBSkk7a0NBSUgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNFO0FBREY7QUFBQSwrQkFDRyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0U7QUFERjtBQUFBLCtCQUNFLEFBQUMsOEJBQUssc0JBQW9CLEtBQUEsQUFBSyxNQUF6QixBQUErQixVQUFyQzs4QkFBQTtnQ0FBQSxBQUNFO0FBREY7K0JBQ0UsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDRTtBQURGO0FBQUEsK0JBQ0UsQUFBQyx5Q0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUFmZixBQUNDLEFBRUksQUFRRSxBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBUWY7Ozs7O2lILEFBbkU0Qjs7Ozs7aUNBQ2hCO0Esa0RBQWtCLDZCQUFpQixNQUFBLEFBQU0sTUFBdkIsQSxBQUE2QixBQUNyRDs7d0NBQUEsQUFBUSxJQUFSLEFBQVksWUFBWSxNQUFBLEFBQU0sTUFBOUIsQUFBb0MsU0FBcEMsQUFBNkMsNEJBQTRCLE1BQUEsQUFBTSxNQUEvRSxBQUFxRjs7dUNBQy9ELGdCQUFBLEFBQWdCLFFBQWhCLEFBQXdCLG9CQUF4QixBQUE0QyxBOztpQ0FBNUQ7QTs7NkNBSUksTUFBQSxBQUFNLE1BRFQsQUFDZSxBQUNyQjtrREFBYyxNQUFBLEFBQU0sTUFGZCxBQUVvQixBQUN2QjtpREFBYSxRQUhWLEFBR1UsQUFBUSxBQUNyQjtrREFBYyxRQUpYLEFBSVcsQUFBUSxBQUN0QjtrREFBYyxRQUxYLEFBS1csQUFBUSxBO0FBTG5CLEFBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUaUIsQSxBQXdFMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvd1Byb2R1Y3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdm10OTA3L0RvY3VtZW50cy9lY29tbWVyY2VmaW5hbC1yZWFjdCJ9