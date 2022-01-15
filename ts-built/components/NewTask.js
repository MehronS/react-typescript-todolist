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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewTask = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./styles.css");
var NewTask = function (_a) {
    var todo = _a.todo, setTodo = _a.setTodo, handleAdd = _a.handleAdd;
    var inputRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)("form", __assign({ className: "input", onSubmit: function (e) {
            var _a;
            handleAdd(e);
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        } }, { children: [(0, jsx_runtime_1.jsx)("input", { ref: inputRef, type: "input", placeholder: "Enter Task", className: "input-box", value: todo, onChange: function (e) { return setTodo(e.target.value); } }, void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "input-submit" }, { children: "Add" }), void 0)] }), void 0));
};
exports.NewTask = NewTask;
