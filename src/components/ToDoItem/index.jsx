import { use } from "react";
import { toast } from "react-toastify";
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

  const handleDelete = async (item) => {
    try {
      await deleteTodo(item);

      toast.success("Tarefa removida com sucesso!");
    } catch (error) {
      console.error("Erro ao remover tarefa: ", error);
      toast.error("Ocorreu um erro ao remover a tarefa.");
    }
  };

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
          <button className="btn" onClick={() => handleDelete(item)}>
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
