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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var SingleTodo_1 = __importDefault(require("./SingleTodo"));
require("./styles.css");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var TodoList = function (_a) {
    var todos = _a.todos, setTodos = _a.setTodos, completedTodos = _a.completedTodos, setCompletedTodos = _a.setCompletedTodos;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "container" }, { children: [(0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Droppable, __assign({ droppableId: "TodosList" }, { children: function (provided, snapshot) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "todos ".concat(snapshot.isDraggingOver ? "dragactive" : ""), ref: provided.innerRef }, provided.droppableProps, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "todos-heading" }, { children: "Active Tasks" }), void 0), todos.map(function (todo, index) { return ((0, jsx_runtime_1.jsx)(SingleTodo_1.default, { index: index, todo: todo, setTodos: setTodos, todos: todos }, todo.id)); }), provided.placeholder] }), void 0)); } }), void 0), (0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Droppable, __assign({ droppableId: "TodosComplete" }, { children: function (provided, snapshot) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "todos remove ".concat(snapshot.isDraggingOver ? "dragcomplete" : ""), ref: provided.innerRef }, provided.droppableProps, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "todos-heading" }, { children: "Completed Tasks" }), void 0), completedTodos.map(function (todo, index) { return ((0, jsx_runtime_1.jsx)(SingleTodo_1.default, { index: index, todo: todo, setTodos: setCompletedTodos, todos: completedTodos }, todo.id)); }), provided.placeholder] }), void 0)); } }), void 0)] }), void 0));
};
exports.default = TodoList;
