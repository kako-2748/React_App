webpackHotUpdate("main",{

/***/ "./src/components/index.tsx":
/*!**********************************!*\
  !*** ./src/components/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
/* 10項目の項目（スキーマ）を用意し、画面で入力したデータを登録、編集、削除するアプリを作成する。
項目名は和名と英名を用意し、和名を画面描画に使用し、英名をスキーマ名に使用すること
例）和名：名前　英名：name
一覧画面（index.html）を開くと登録したデータをテーブルで一覧表示する。
データが登録されていない場合は「登録されていない」旨を表示する。
index.htmlに「新規登録」ボタンを設置し、登録画面に遷移する。
登録画面で10項目を入力するフォームを用意する。
 テキストエリア、ラジオボタン、セレクトボックス、チェックボックスを必ず使用すること
登録画面で「登録」ボタンを押下し、データを登録する。成功時には一覧画面に遷移する。一覧には登録した全データが表示されていること
登録に失敗した場合は、エラー内容をalertで表示すること
一覧から任意のデータを選択し、そのデータの編集画面に遷移する。
編集画面で選択したデータの編集が行えること
編集画面に「更新」ボタンを押下し、データを更新する。成功時に一覧画面に遷移する。一覧には編集後のデータが表示されていること
失敗時にはエラー内容をalertで表示すること
一覧から任意のデータを選択し、「削除」ボタンを押下することでそのデータを削除する。
削除成功時には削除後の一覧が表示されること */
var FormComponent = function () {
    var _a = react_1.useState(''), name = _a[0], setName = _a[1];
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), memo = _c[0], setMemo = _c[1];
    var _d = react_1.useState(''), gender = _d[0], setGender = _d[1];
    var changeName = function (e) {
        setName(e.target.value);
    };
    var changeEmail = function (e) {
        setEmail(e.target.value);
    };
    var checkedMen = function () {
        setGender('男');
    };
    var checkedWoen = function () {
        setGender('女');
    };
    return (React.createElement("form", null,
        React.createElement("label", { htmlFor: name }, "\u540D\u524D:"),
        React.createElement("input", { type: "text", name: name, value: name, onChange: changeName }),
        React.createElement("label", { htmlFor: email }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9:"),
        React.createElement("input", { type: "text", name: email, value: email, onChange: changeEmail }),
        React.createElement("input", { type: "date", name: "calendar", max: "9999-12-31" }),
        React.createElement("label", { htmlFor: memo }, "\u30E1\u30E2:"),
        React.createElement("textarea", { name: memo, value: memo, onChange: function (e) { return setMemo(e.target.value); } }),
        React.createElement("input", { type: "radio", name: gender, onChange: checkedMen }),
        React.createElement("label", { htmlFor: "gender" }, "\u7537"),
        React.createElement("input", { type: "radio", name: gender, onChange: checkedWoen }),
        React.createElement("label", { htmlFor: "gender" }, "\u5973"),
        React.createElement("p", null,
            "\u30C1\u30A7\u30C3\u30AF",
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox", name: "check" }),
            "\u30C1\u30A7\u30C3\u30AF\uFF11",
            React.createElement("input", { type: "checkbox", name: "check" }),
            "\u30C1\u30A7\u30C3\u30AF2",
            React.createElement("input", { type: "checkbox", name: "check" }),
            "\u30C1\u30A7\u30C3\u30AF3"),
        React.createElement("select", { name: "example", multiple: true },
            React.createElement("option", null, "\u30B5\u30F3\u30D7\u30EB\uFF11"),
            React.createElement("option", null, "\u30B5\u30F3\u30D7\u30EB\uFF12"),
            React.createElement("option", null, "\u30B5\u30F3\u30D7\u30EB\uFF13")),
        React.createElement("input", { type: "submit", value: "\u9001\u4FE1" })));
};
var App = function () {
    var getdata = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    axios_1.default.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
                    return [4 /*yield*/, axios_1.default.get('/d/foo/2?e')];
                case 1:
                    res = _a.sent();
                    alert("res= " + res.data.user.name + " ");
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
    react_1.useEffect(function () {
        getdata();
    });
    return (React.createElement("div", null,
        React.createElement(FormComponent, null)));
};
ReactDOM.render(React.createElement(App, null), document.getElementById('container'));


/***/ })

})
//# sourceMappingURL=main.f21fe363028f02c116fb.hot-update.js.map