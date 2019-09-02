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
var FormComponent = function () {
    var state = react_1.useContext(FormContext)[0];
    var setState = react_1.useContext(ChangeTextContext)[0];
    return (React.createElement("form", { name: "forms" },
        React.createElement("input", { type: "text", name: state.name, value: state.name, onChange: function (e) { return setState(__assign({}, state, { name: e.target.value })); }, placeholder: "\u540D\u524D" }),
        React.createElement("br", null),
        React.createElement("input", { type: "text", name: state.email, value: state.email, onChange: function (e) { return setState(__assign({}, state, { email: e.target.value })); }, placeholder: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" }),
        React.createElement("br", null),
        React.createElement("label", { htmlFor: "calendar" }, "\u751F\u5E74\u6708\u65E5:"),
        React.createElement("br", null),
        React.createElement("input", { type: "date", max: "9999-12-31", value: state.birthday, onChange: function (e) { return setState(__assign({}, state, { birthday: e.target.value })); } }),
        React.createElement("br", null),
        React.createElement("input", { type: "text", value: state.job, onChange: function (e) { return setState(__assign({}, state, { job: e.target.value })); }, placeholder: "\u8077\u696D" }),
        React.createElement("br", null),
        React.createElement("input", { type: "text", name: state.address, value: state.address, onChange: function (e) { return setState(__assign({}, state, { address: e.target.value })); }, placeholder: "\u4F4F\u6240" }),
        React.createElement("br", null),
        React.createElement("input", { type: "text", name: state.height, value: state.height, onChange: function (e) { return setState(__assign({}, state, { height: e.target.value })); }, placeholder: "\u8EAB\u9577" }),
        React.createElement("br", null),
        React.createElement(CheckComponent, null),
        React.createElement("textarea", { name: state.memo, value: state.memo, onChange: function (e) { return setState(__assign({}, state, { memo: e.target.value })); }, placeholder: "\u30E1\u30E2" }),
        React.createElement("br", null),
        React.createElement(ButtonCompoent, null)));
};
var CheckComponent = function () {
    var state = react_1.useContext(FormContext)[0];
    var setState = react_1.useContext(ChangeTextContext)[0];
    return (React.createElement("form", null,
        React.createElement("input", { type: "radio", name: state.gender, onChange: function () { return setState(__assign({}, state, { gender: '男' })); } }),
        React.createElement("label", { htmlFor: "gender" }, "\u7537"),
        React.createElement("input", { type: "radio", name: state.gender, onChange: function () { return setState(__assign({}, state, { gender: '女' })); } }),
        React.createElement("label", { htmlFor: "gender" }, "\u5973"),
        React.createElement("br", null),
        React.createElement("input", { type: "checkbox", name: state.check, onChange: function () { return setState(__assign({}, state, { check: 'チェック１' })); } }),
        "\u30C1\u30A7\u30C3\u30AF\uFF11",
        React.createElement("input", { type: "checkbox", name: state.check, onChange: function () { return setState(__assign({}, state, { check: 'チェック２' })); } }),
        "\u30C1\u30A7\u30C3\u30AF2",
        React.createElement("input", { type: "checkbox", name: state.check, onChange: function () { return setState(__assign({}, state, { check: 'チェック３' })); } }),
        "\u30C1\u30A7\u30C3\u30AF3",
        React.createElement("br", null),
        React.createElement("select", { value: state.selectBox, onChange: function (e) { return setState(__assign({}, state, { selectBox: e.target.value })); } },
            React.createElement("option", { value: "\u30B5\u30F3\u30D7\u30EB\uFF11" }, "\u30B5\u30F3\u30D7\u30EB\uFF11"),
            React.createElement("option", { value: "\u30B5\u30F3\u30D7\u30EB\uFF12" }, "\u30B5\u30F3\u30D7\u30EB\uFF12"),
            React.createElement("option", { value: "\u30B5\u30F3\u30D7\u30EB\uFF13" }, "\u30B5\u30F3\u30D7\u30EB\uFF13")),
        React.createElement("br", null)));
};
var ButtonCompoent = function () {
    var putdata = react_1.useContext(ChangeTextContext)[0];
    return (React.createElement("button", { type: "submit", onClick: putdata }, "\u767B\u9332"));
};
var App = function (props) {
    var _a = react_1.useState(props), state = _a[0], setState = _a[1];
    var req = [
        {
            user: {
                name: state.name,
                email: state.email,
                memo: state.memo,
                gender: state.gender,
                job: state.job,
                address: state.address,
                height: state.height,
                select: state.selectBox,
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
                    alert('登録に失敗しました。');
                    console.log(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", null,
        React.createElement(FormContext.Provider, { value: [state] },
            React.createElement(ChangeTextContext.Provider, { value: [setState, putdata] },
                React.createElement(FormComponent, null)))));
};
App.defaultProps = {
    name: '',
    email: '',
    memo: '',
    gender: '',
    birthday: '',
    job: '',
    address: '',
    height: '',
    selectBox: '',
    check: ['']
};
ReactDOM.render(React.createElement(App, null), document.getElementById('container'));


/***/ })

})
//# sourceMappingURL=main.5d292ac67030b64b75fa.hot-update.js.map