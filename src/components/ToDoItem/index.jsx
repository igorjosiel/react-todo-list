import { use } from "react";
import { IconPencil, IconTrash } from "../icons";
import TodoContext from "../TodoProvider/TodoContext";
import "./todo-item.style.css";

export default function ToDoItem({ item }) {
  const {
    toggleTodoCompleted,
    deleteTodo,
    openFormTodoDialog,
  } = use(TodoContext);

  const styles = ["todo-item"];

  if (item.completed) {
    styles.push("completed");
  }

  return (
    <li className={styles.join(" ")}>
      <div className="details first-line">
        <p className="title">{item.title}</p>

        <p className="date">
          {new Date(item.createdAt).toLocaleDateString("pt-BR")}
        </p>
      </div>

      <div className="details">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          onClick={() => toggleTodoCompleted(item)}
        />

        <p className="description">{item.description}</p>

        <div className="actions">
          <button className="btn" onClick={() => deleteTodo(item)}>
            <IconTrash />
          </button>
          <button className="btn" onClick={() => openFormTodoDialog(item)}>
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
