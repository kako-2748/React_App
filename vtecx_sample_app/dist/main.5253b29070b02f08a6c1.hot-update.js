webpackHotUpdate("main",{

/***/ "./src/components/index.tsx":
/*!**********************************!*\
  !*** ./src/components/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var react_1 = __webpack_require__(/*! react */ "react");
var axios_1 = __webpack_require__(/*! axios */ "axios");
var FormContext = react_1.createContext([]);
var ChangeTextContext = react_1.createContext([]);
var initState = { check: '' };
var reducer = function (state, action) {
    switch (action.type) {
        case 'check1':
            return __assign({}, state, { check: state.check + 'チェック1,' });
        case 'check2':
            return __assign({}, state, { check: state.check + 'チェック2,' });
        case 'check3':
            return __assign({}, state, { check: state.check + 'チェック3,' });
        default:
            return state;
    }
};
var FormComponent = function () {
    var _a = react_1.useContext(FormContext), name = _a[0], email = _a[1], memo = _a[2], address = _a[3], job = _a[4], height = _a[5], birthday = _a[6];
    var _b = react_1.useContext(ChangeTextContext), setName = _b[0], setEmail = _b[1], setJob = _b[2], setAddress = _b[3], setMemo = _b[4], setHeight = _b[5], setBirthday = _b[6];
    console.log(birthday);
    return (React.createElement("form", { name: "forms" },
        React.createElement("input", { type: "text", name: name, value: name, onChange: function (e) { return setName(e.target.value); }, placeholder: "\u540D\u524D" }),
        React.createElement("br", null),
        React.createElement("input", { type: "text", name: email, value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" }),
        React.createElement("br", null),
        React.createElement("label", { htmlFor: "calendar" }, "\u751F\u5E74\u6708\u65E5:"),
        React.createElement("br", null),
        React.createElement("input", { type: "date", name: "calendar", max: "9999-12-31", value: birthday, onChange: function (e) { return setBirthday(e.target.value); } }),
        React.createElement("br", null),
        React.createElement("input", { type: "text", value: job, onChange: function (e) { return setJob(e.target.value); }, placeholder: "\u8077\u696D" }),
        React.createElement("br", null),
        React.createElement("input", { type: "text", name: address, value: address, onChange: function (e) { return setAddress(e.target.value); }, placeholder: "\u4F4F\u6240" }),
        React.createElement("br", null),
        React.createElement("input", { type: "text", name: height, value: height, onChange: function (e) { return setHeight(e.target.value); }, placeholder: "\u8EAB\u9577" }),
        React.createElement("br", null),
        React.createElement(CheckComponent, null),
        React.createElement("textarea", { name: memo, value: memo, onChange: function (e) { return setMemo(e.target.value); }, placeholder: "\u30E1\u30E2" }),
        React.createElement("br", null),
        React.createElement(ButtonCompoent, null)));
};
var CheckComponent = function () {
    var gender = react_1.useContext(FormContext)[0];
    var _a = react_1.useContext(ChangeTextContext), setSelectBox = _a[0], setGender = _a[1], dispatch = _a[2];
    return (React.createElement("form", null,
        React.createElement("input", { type: "radio", name: gender, onChange: function () { return setGender('男'); } }),
        React.createElement("label", { htmlFor: "gender" }, "\u7537"),
        React.createElement("input", { type: "radio", name: gender, onChange: function () { return setGender('女'); } }),
        React.createElement("label", { htmlFor: "gender" }, "\u5973"),
        React.createElement("br", null),
        React.createElement("input", { type: "checkbox", name: "check", value: "check1", onChange: function () { return dispatch({ type: 'check1' }); } }),
        "\u30C1\u30A7\u30C3\u30AF\uFF11",
        React.createElement("input", { type: "checkbox", name: "check", value: "check2", onChange: function () { return dispatch({ type: 'check2' }); } }),
        "\u30C1\u30A7\u30C3\u30AF2",
        React.createElement("input", { type: "checkbox", name: "check", value: "check3", onChange: function () { return dispatch({ type: 'check3' }); } }),
        "\u30C1\u30A7\u30C3\u30AF3",
        React.createElement("br", null),
        React.createElement("select", { name: "example", id: "output", onChange: function (select) { return setSelectBox(select.value); } },
            React.createElement("option", null, "\u30B5\u30F3\u30D7\u30EB\uFF11"),
            React.createElement("option", null, "\u30B5\u30F3\u30D7\u30EB\uFF12"),
            React.createElement("option", null, "\u30B5\u30F3\u30D7\u30EB\uFF13")),
        React.createElement("br", null)));
};
var ButtonCompoent = function () {
    var putdata = react_1.useContext(ChangeTextContext)[0];
    return (React.createElement("button", { type: "submit", onClick: putdata }, "\u767B\u9332"));
};
var App = function () {
    var _a = react_1.useState(''), name = _a[0], setName = _a[1];
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), memo = _c[0], setMemo = _c[1];
    var _d = react_1.useState(''), gender = _d[0], setGender = _d[1];
    var _e = react_1.useState(''), birthday = _e[0], setBirthday = _e[1];
    var _f = react_1.useState(''), job = _f[0], setJob = _f[1];
    var _g = react_1.useState(''), address = _g[0], setAddress = _g[1];
    var _h = react_1.useState(''), height = _h[0], setHeight = _h[1];
    var _j = react_1.useState(''), selectBox = _j[0], setSelectBox = _j[1];
    var _k = react_1.useReducer(reducer, initState), state = _k[0], dispatch = _k[1];
    console.log(state);
    console.log(birthday);
    var req = [
        {
            user: {
                name: name,
                email: email,
                memo: memo,
                gender: gender,
                job: job,
                address: address,
                height: height,
                select: selectBox,
                check: state.check
            },
            link: [
                {
                    "___href": "/foo/2",
                    "___rel": "self"
                }
            ]
        }
    ];
    var putdata = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    axios_1.default.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
                    return [4 /*yield*/, axios_1.default.put('/d/foo', req)];
                case 1:
                    res = _a.sent();
                    console.log(res);
                    console.log(req);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    alert('error');
                    console.log(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", null,
        React.createElement(FormContext.Provider, { value: [name, email, memo, gender, address, job, height, selectBox, birthday] },
            React.createElement(ChangeTextContext.Provider, { value: [setName, setEmail, setJob, setAddress,
                    setMemo, setHeight, setGender, putdata, setSelectBox, setBirthday, dispatch] },
                React.createElement(FormComponent, null)))));
};
ReactDOM.render(React.createElement(App, null), document.getElementById('container'));


/***/ })

})
//# sourceMappingURL=main.5253b29070b02f08a6c1.hot-update.js.map