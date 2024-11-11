/* eslint-disable react/prop-types */
import { useState } from "react";
const TodoNew = (props) => {
    //useState hook (getter/setter)
    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("");

    const { addNewTodo } = props;

    const handleClick = () => {
        if (!valueInput) {
            alert("Empty todo");
            return;
        }
        addNewTodo(valueInput);
        setValueInput("");
    };

    const handleOnChange = (name) => {
        setValueInput(name);
    };

    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>
                Add
            </button>
        </div>
    );
};

export default TodoNew;
