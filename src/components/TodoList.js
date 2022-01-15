"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SingleTodo_1 = require("./SingleTodo");
require("./styles.css");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var TodoList = function (_a) {
    var todos = _a.todos, setTodos = _a.setTodos, completedTodos = _a.completedTodos, setCompletedTodos = _a.setCompletedTodos;
    return (<div className="container">
      <react_beautiful_dnd_1.Droppable droppableId="TodosList">
        {function (provided, snapshot) { return (<div className={"todos ".concat(snapshot.isDraggingOver ? "dragactive" : "")} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos-heading">Active Tasks</span>
            {todos.map(function (todo, index) { return (<SingleTodo_1["default"] index={index} todo={todo} setTodos={setTodos} todos={todos} key={todo.id}/>); })}
            {provided.placeholder}
          </div>); }}
      </react_beautiful_dnd_1.Droppable>
      <react_beautiful_dnd_1.Droppable droppableId="TodosComplete">
        {function (provided, snapshot) { return (<div className={"todos remove ".concat(snapshot.isDraggingOver ? "dragcomplete" : "")} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos-heading">Completed Tasks</span>
            {completedTodos.map(function (todo, index) { return (<SingleTodo_1["default"] index={index} todo={todo} setTodos={setCompletedTodos} todos={completedTodos} key={todo.id}/>); })}
            {provided.placeholder}
          </div>); }}
      </react_beautiful_dnd_1.Droppable>
    </div>);
};
exports["default"] = TodoList;
