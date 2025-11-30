import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TODOS = "todos";

export default function TodoProvider({ children }) {
  const savedTodos = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (formData) => {
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const priority = formData.get("priority");

    setTodos((prevState) => {
      const newTodo = {
        id: prevState.length + 1,
        title,
        description,
        date,
        priority,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      return [...prevState, newTodo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }

        return t;
      });
    });
  };

  const editTodo = (formData) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === selectedTodo.id) {
          return {
            ...t,
            title: formData.get("title"),
            description: formData.get("description"),
            date: formData.get("date"),
            priority: formData.get("priority"),
          };
        }

        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id !== todo.id);
    });
  };

  const openFormTodoDialog = (todo) => {
    if (todo) setSelectedTodo(todo);

    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
