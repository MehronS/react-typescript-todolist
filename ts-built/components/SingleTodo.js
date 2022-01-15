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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ai_1 = require("react-icons/ai");
require("./styles.css");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var SingleTodo = function (_a) {
    var todo = _a.todo, todos = _a.todos, setTodos = _a.setTodos, index = _a.index;
    var _b = (0, react_1.useState)(false), edit = _b[0], setEdit = _b[1];
    var _c = (0, react_1.useState)(todo.todo), editTodo = _c[0], setEditTodo = _c[1];
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [edit]);
    var handleDelete = function (id) {
        setTodos(todos.filter(function (todo) { return todo.id !== id; }));
    };
    var handleEdit = function (e, id) {
        e.preventDefault();
        setTodos(todos.map(function (todo) { return (todo.id === id ? __assign(__assign({}, todo), { todo: editTodo }) : todo); }));
        setEdit(false);
    };
    return ((0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Draggable, __assign({ draggableId: todo.id.toString(), index: index }, { children: function (provided, snapshot) { return ((0, jsx_runtime_1.jsxs)("form", __assign({ className: "todos-single ".concat(snapshot.isDragging ? "drag" : ""), onSubmit: function (e) { return handleEdit(e, todo.id); } }, provided.draggableProps, provided.dragHandleProps, { ref: provided.innerRef }, { children: [edit ? ((0, jsx_runtime_1.jsx)("input", { ref: inputRef, value: editTodo, onChange: function (e) { return setEditTodo(e.target.value); }, className: "todos-single-text" }, void 0)) : todo.isDone ? ((0, jsx_runtime_1.jsx)("s", __assign({ className: "todos-single-text" }, { children: todo.todo }), void 0)) : ((0, jsx_runtime_1.jsx)("span", __assign({ className: "todos-single-text" }, { children: todo.todo }), void 0)), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "icon", onClick: function () {
                                if (!edit && !todo.isDone)
                                    setEdit(!edit);
                            } }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiFillEdit, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "icon", onClick: function () { return handleDelete(todo.id); } }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiFillDelete, {}, void 0) }), void 0)] }, void 0)] }), void 0)); } }), void 0));
};
exports.default = SingleTodo;
