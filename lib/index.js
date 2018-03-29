'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultModalComponents = exports.defaultCarouselComponents = exports.ModalGateway = exports.Modal = undefined;

var _Carousel = require('./components/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Gateway = require('./components/Modal/Gateway');

var _Gateway2 = _interopRequireDefault(_Gateway);

var _Modal = require('./components/Modal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _defaultComponents = require('./components/defaultComponents');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Carousel2.default;
exports.Modal = _Modal2.default;
exports.ModalGateway = _Gateway2.default;
exports.defaultCarouselComponents = _defaultComponents.defaultCarouselComponents;
exports.defaultModalComponents = _defaultComponents.defaultModalComponents;