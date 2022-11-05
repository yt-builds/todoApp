import styles from "./style/style.module.css";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function SingleTodo({ todo, todos, setAllTodos, index }) {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState();

  const [isChecked, setIsChecked] = useState(false);

  const deleteHandler = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setAllTodos(newTodos);
  };

  const updateTodoHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos];
    newTodos[index].text = editTodo;
    setAllTodos(newTodos);
    setEdit(false);
  };

  const completeHandler = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setAllTodos(newTodos);
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.mainContainer}>
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => completeHandler(index)}
        />
        {!edit ? (
          <h4 className={isChecked ? styles.textRemove : styles.normalText}>
            {todo.text}
          </h4>
        ) : (
          <div className={styles.updateContainer}>
            <form onSubmit={updateTodoHandler}>
              <input
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
      <div>
        <ModeIcon
          className={styles.icon}
          onClick={() => {
            setEdit(!edit);
            setEditTodo(todo.text);
          }}
        />
        <DeleteIcon
          className={styles.icon}
          onClick={() => deleteHandler(index)}
        />
      </div>
    </div>
  );
}
