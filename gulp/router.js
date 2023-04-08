"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _fs = _interopRequireDefault(require("fs"));
var _datausersserv = _interopRequireDefault(require("./public/json/datausersserv.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var router = (0, _express.Router)();
router.get("/", function (req, res, next) {
  res.render("start_page", {
    users_data: _datausersserv["default"]
  });
  next();
});
router.post("/changedate", function (req, res, next) {
  var id = parseInt(req.body.id_us);
  var u_date = req.body.new_data;
  var _iterator = _createForOfIteratorHelper(_datausersserv["default"]),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var us = _step.value;
      if (us.id === id) us.birthday = u_date;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  _fs["default"].writeFileSync("./public/json/datausersserv.json", JSON.stringify(_datausersserv["default"]));
  res.redirect("/");
  next();
});
router.post("/changeemail", function (req, res, next) {
  var id = parseInt(req.body.id_us);
  var u_email = req.body.new_data;
  var _iterator2 = _createForOfIteratorHelper(_datausersserv["default"]),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var us = _step2.value;
      if (us.id === id) {
        if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(u_email)) us.email = u_email;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  _fs["default"].writeFileSync("./public/json/datausersserv.json", JSON.stringify(_datausersserv["default"]));
  res.redirect("/");
  next();
});
router.post("/changerole", function (req, res, next) {
  var id = parseInt(req.body.id_us);
  var u_role = req.body.new_data;
  var _iterator3 = _createForOfIteratorHelper(_datausersserv["default"]),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var us = _step3.value;
      if (us.id === id) us.role = u_role;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  _fs["default"].writeFileSync("./public/json/datausersserv.json", JSON.stringify(_datausersserv["default"]));
  res.redirect("/");
  next();
});
router.post("/changestatus", function (req, res, next) {
  var id = parseInt(req.body.id_us);
  var u_status = req.body.new_data;
  var _iterator4 = _createForOfIteratorHelper(_datausersserv["default"]),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var us = _step4.value;
      if (us.id === id) us.status = u_status;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  _fs["default"].writeFileSync("./public/json/datausersserv.json", JSON.stringify(_datausersserv["default"]));
  res.redirect("/");
  next();
});
router.post("/user/:num/newnews", function (req, res, next) {
  var id = parseInt(req.params.num);
  var u_news = req.body.d;
  var today = new Date();
  var _iterator5 = _createForOfIteratorHelper(_datausersserv["default"]),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var us = _step5.value;
      if (us.id === id) {
        if (u_news) us.news.push({
          "onenews": u_news,
          "date": today.toLocaleDateString()
        });
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  _fs["default"].writeFileSync("./public/json/datausersserv.json", JSON.stringify(_datausersserv["default"]));
  res.redirect("/user/" + id);
  next();
});
router.get("/user/:num", function (req, res, next) {
  var id = parseInt(req.params.num);
  var newss = "";
  var _iterator6 = _createForOfIteratorHelper(_datausersserv["default"][id].news),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var us = _step6.value;
      newss += us.onenews + " от " + us.date + "\n";
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  res.render("user", {
    us: _datausersserv["default"][id],
    list_news: newss
  });
  next();
});
router.get("/user/:num/friends", function (req, res, next) {
  var id = parseInt(req.params.num);
  res.render("list_friends", {
    users_data: _datausersserv["default"],
    list_friends: _datausersserv["default"][id].friends
  });
  next();
});
router.get("/user/:num/news", function (req, res, next) {
  var id = parseInt(req.params.num);
  res.render("list_news", {
    users_data: _datausersserv["default"],
    list_friends: _datausersserv["default"][id].friends
  });
  next();
});
var _default = router;
exports["default"] = _default;