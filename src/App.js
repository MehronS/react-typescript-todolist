"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var NewTask_1 = require("./components/NewTask");
var TodoList_1 = require("./components/TodoList");
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
    return (<react_beautiful_dnd_1.DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Fancy Todo List</span>
        <NewTask_1.NewTask todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList_1["default"] todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
      </div>
    </react_beautiful_dnd_1.DragDropContext>);
};
exports["default"] = App;
