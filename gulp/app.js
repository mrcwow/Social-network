"use strict";

var _express = _interopRequireDefault(require("express"));
var _router = _interopRequireDefault(require("./router.js"));
var _https = _interopRequireDefault(require("https"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var server = (0, _express["default"])();
server.use(_express["default"].json());
server.use(_express["default"]["static"]('public'));
server.use(_express["default"].urlencoded({
  extended: true
}));
server.use(_router["default"]);
server.set('view engine', 'pug');
server.set('views', 'public/pug');
var keys = {
  key: _fs["default"].readFileSync("./public/cert/server.key", 'utf8'),
  cert: _fs["default"].readFileSync("./public/cert/server.crt", 'utf8')
};
var server_s = _https["default"].createServer(keys, server);
server_s.listen(3000);