"use strict";
exports.__esModule = true;
exports.NewTask = void 0;
var react_1 = require("react");
require("./styles.css");
var NewTask = function (_a) {
    var todo = _a.todo, setTodo = _a.setTodo, handleAdd = _a.handleAdd;
    var inputRef = (0, react_1.useRef)(null);
    return (<form className="input" onSubmit={function (e) {
            var _a;
            handleAdd(e);
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }}>
      <input ref={inputRef} type="input" placeholder="Enter Task" className="input-box" value={todo} onChange={function (e) { return setTodo(e.target.value); }}/>
      <button className="input-submit">Add</button>
    </form>);
};
exports.NewTask = NewTask;
