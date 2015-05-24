'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = randomUrl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

'use strict';

function randomUrl() {
  var protocol = arguments[0] === undefined ? 'http' : arguments[0];

  return '' + protocol + '://' + _cuid2['default']() // eslint-disable-line no-undef
  ;
}

module.exports = exports['default'];