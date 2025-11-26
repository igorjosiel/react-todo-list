import "./todo-list.style.css";

export default function ToDoList({ children, ...rest }) {
  return (
    <ul className="todo-list" {...rest}>
      {children}
    </ul>
  );
}
