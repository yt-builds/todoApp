import styles from "./style/style.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import SingleTodo from "../individualTodo/SingleTodo";

export default function Main() {
  const [allTodos, setAllTodos] = useState([]);
  const [todo, setTodo] = useState();

  const formHandler = (e) => {
    e.preventDefault();
    const newTodo = [...allTodos, { text: todo, isCompleted: false }];
    setAllTodos(newTodo);
    setTodo("");
  };

  return (
    <div className={styles.container}>
      <h1>TODO APP</h1>
      <form onSubmit={formHandler}>
        <div className={styles.enterTodoContainer}>
          <div>
            <input
              type="text"
              placeholder="Enter a task"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div>
            <span className={styles.buttonSpan} onClick={formHandler}>
              ADD <AddIcon />
            </span>
          </div>
        </div>
      </form>
      {allTodos.map((todo, index) => (
        <SingleTodo
          todo={todo}
          todos={allTodos}
          setAllTodos={setAllTodos}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
}
