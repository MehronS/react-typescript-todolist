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
exports.__esModule = true;
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
    return (<react_beautiful_dnd_1.Draggable draggableId={todo.id.toString()} index={index}>
      {function (provided, snapshot) { return (<form className={"todos-single ".concat(snapshot.isDragging ? "drag" : "")} onSubmit={function (e) { return handleEdit(e, todo.id); }} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          {edit ? (<input ref={inputRef} value={editTodo} onChange={function (e) { return setEditTodo(e.target.value); }} className="todos-single-text"/>) : todo.isDone ? (<s className="todos-single-text">{todo.todo}</s>) : (<span className="todos-single-text">{todo.todo}</span>)}

          <div>
            <span className="icon" onClick={function () {
                if (!edit && !todo.isDone)
                    setEdit(!edit);
            }}>
              <ai_1.AiFillEdit />
            </span>
            <span className="icon" onClick={function () { return handleDelete(todo.id); }}>
              <ai_1.AiFillDelete />
            </span>
          </div>
        </form>); }}
    </react_beautiful_dnd_1.Draggable>);
};
exports["default"] = SingleTodo;
