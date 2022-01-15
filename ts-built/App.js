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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./App.css");
var NewTask_1 = require("./components/NewTask");
var TodoList_1 = __importDefault(require("./components/TodoList"));
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var App = function () {
    var _a = (0, react_1.useState)(""), todo = _a[0], setTodo = _a[1];
    var _b = (0, react_1.useState)([]), todos = _b[0], setTodos = _b[1];
    var _c = (0, react_1.useState)([]), completedTodos = _c[0], setCompletedTodos = _c[1];
    var handleAdd = function (e) {
        e.preventDefault();
        if (todo) {
            setTodos(__spreadArray(__spreadArray([], todos, true), [{ id: Date.now(), todo: todo, isDone: false }], false));
            setTodo("");
        }
    };
    var onDragEnd = function (result) {
        var source = result.source, destination = result.destination;
        if (!destination)
            return;
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index)
            return;
        var add, active = todos, complete = completedTodos;
        if (source.droppableId === "TodosList") {
            add = active[source.index];
            active.splice(source.index, 1);
        }
        else {
            add = complete[source.index];
            complete.splice(source.index, 1);
        }
        if (destination.droppableId === "TodosList") {
            active.splice(destination.index, 0, add);
        }
        else {
            complete.splice(destination.index, 0, add);
        }
        setCompletedTodos(complete);
        setTodos(active);
    };
    return ((0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.DragDropContext, __assign({ onDragEnd: onDragEnd }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "heading" }, { children: "Fancy Todo List" }), void 0), (0, jsx_runtime_1.jsx)(NewTask_1.NewTask, { todo: todo, setTodo: setTodo, handleAdd: handleAdd }, void 0), (0, jsx_runtime_1.jsx)(TodoList_1.default, { todos: todos, setTodos: setTodos, completedTodos: completedTodos, setCompletedTodos: setCompletedTodos }, void 0)] }), void 0) }), void 0));
};
exports.default = App;
